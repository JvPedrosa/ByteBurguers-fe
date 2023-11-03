import { ShoppingCart } from "./ShoppingCart";
import * as S from "./styles";

export const Header = () => {
  return (
    <S.Container>
      <S.LinksContainer>
        <S.Link to="/">Home</S.Link>
        <S.Link to="/login">Login</S.Link>
      </S.LinksContainer>

      <S.Title>Byte Burgers</S.Title>

      <ShoppingCart />
    </S.Container>
  );
};
