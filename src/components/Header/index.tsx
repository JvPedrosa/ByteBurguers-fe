import { ShoppingCart } from "./ShoppingCart";
import * as S from "./styles";

interface HeaderProps {
  viewCart: boolean;
}

export const Header = ({ viewCart }: HeaderProps) => {
  return (
    <S.Container>
      <S.LinksContainer>
        <S.Link to="/">Home</S.Link>
        <S.Link to="/login">Login</S.Link>
      </S.LinksContainer>
      <S.Title>Byte Burgers</S.Title>
      {viewCart && <ShoppingCart />}
    </S.Container>
  );
};
