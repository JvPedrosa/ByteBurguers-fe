import { useState, useEffect } from "react";
import {
  StyledContainer,
  StyledBox,
  StyledTypography,
  StyledList,
  StyledListItem,
  StyledCircularProgress,
} from "./styles";
import { Button } from "@mui/material";

interface User {
  id: number;
  name: string;
  last_name: string;
  email: string;
  phone: string;
  city: string;
  watch_on: boolean;
  is_flamengo: boolean;
}

export const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:8000/user/list");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteUser = async (userId: number) => {
    // Confirm before deleting
    if (!window.confirm("Tem certeza que deseja deletar este usuário?")) {
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/user/delete/${userId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Remove the user from the local state to update the UI
      setUsers(users.filter((user) => user.id !== userId));
    } catch (error) {
      console.error("There was a problem with the delete operation:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <StyledContainer>
      <StyledBox>
        <StyledTypography>Lista de Usuários</StyledTypography>
        {isLoading ? (
          <StyledCircularProgress />
        ) : (
          <StyledList>
            {users.map((user) => (
              <StyledListItem key={user.id}>
                <div>
                  <strong>{user.name}</strong>
                  <ul>
                    <li>{user.email}</li>
                    <li>{user.phone}</li>
                    <li>{user.city}</li>
                    <li>Assiste On Piece: {user.watch_on ? "Sim" : "Não"}</li>
                    <li>É Flamenguista: {user.is_flamengo ? "Sim" : "Não"}</li>
                  </ul>
                </div>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => deleteUser(user.id)}
                >
                  Deletar Usuário
                </Button>
              </StyledListItem>
            ))}
          </StyledList>
        )}
      </StyledBox>
    </StyledContainer>
  );
};

export default UserList;
