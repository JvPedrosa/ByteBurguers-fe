import useCart from "../../../hooks/useCart";
import * as S from "./styles";

export const ShoppingCart = () => {
  const { totalItems } = useCart();
  return (
    <S.ShoppingCart>
      <S.StyledShoppingCartIcon />
      <S.ShoppingCartCount>{totalItems}</S.ShoppingCartCount>
    </S.ShoppingCart>
  );
};
