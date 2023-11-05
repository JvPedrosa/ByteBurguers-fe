import useCart from "../../hooks/useCart";
import * as S from "./styles";

export const CartIcon = () => {
  const { totalItems } = useCart();
  return (
    <S.ShoppingCart to="/shopping-cart">
      <S.StyledShoppingCartIcon />
      <S.ShoppingCartCount>{totalItems}</S.ShoppingCartCount>
    </S.ShoppingCart>
  );
};
