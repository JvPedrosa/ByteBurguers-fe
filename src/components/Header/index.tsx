import * as S from "./styles";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const Header = () => {
  return (
    <S.Container>
      <S.Link to="/">
        <HomeIcon />
      </S.Link>
      <S.Title>Byte Burgers</S.Title>
      <S.Link to="/signin">
        <AccountCircleIcon />
      </S.Link>
    </S.Container>
  );
};
