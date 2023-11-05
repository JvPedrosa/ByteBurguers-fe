import { useEffect, useState } from "react";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";

interface User {
  email: string;
}

export const Account = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigation = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  if (!user) {
    return (
      <S.Container>
        <S.Title>No user information available.</S.Title>
      </S.Container>
    );
  }

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigation("/signin");
  };

  return (
    <S.Container>
      <S.Title>Detalhes da Conta</S.Title>
      <S.InfoBox>
        <S.InfoItem>
          <S.Label>Email:</S.Label>
          <S.Value>{user.email}</S.Value>
        </S.InfoItem>
        <S.Footer>
          <S.Button onClick={handleLogout}>Sair</S.Button>
        </S.Footer>
      </S.InfoBox>
    </S.Container>
  );
};
