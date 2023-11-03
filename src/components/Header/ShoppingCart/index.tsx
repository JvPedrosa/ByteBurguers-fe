import * as S from "./styles";
import { useState } from "react";

export const ShoppingCart = () => {
  const [count, setCount] = useState(0);
  return (
    <S.ShoppingCart>
      <S.StyledShoppingCartIcon />
      <S.ShoppingCartCount>{count}</S.ShoppingCartCount>
    </S.ShoppingCart>
  );
};
