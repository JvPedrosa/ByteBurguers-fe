import { useState } from "react";
import { formatCurrency } from "../../utils/formatCurrency";
import * as S from "./styles";

interface IProductsProps {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

export const Products = ({ item }: { item: IProductsProps }) => {
  const [quantity, setQuantity] = useState(0);

  const setQuantityHandler = (type: string) => {
    if (type === "add") {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1);
    }
  };

  return (
    <S.Column key={item.id}>
      <S.ProductImage src={item.imgUrl} />
      <S.ProductName>{item.name}</S.ProductName>
      <S.ProductPrice>{formatCurrency(item.price)}</S.ProductPrice>
      <S.Footer>
        {quantity > 0 ? (
          <>
            <S.Button onClick={() => setQuantityHandler("remove")}>-</S.Button>
            <S.Quantity>
              <span>{quantity}</span>
            </S.Quantity>
            <S.Button onClick={() => setQuantityHandler("add")}>+</S.Button>
          </>
        ) : (
          <S.AddButton onClick={() => setQuantityHandler("add")}>
            Adicionar
          </S.AddButton>
        )}
      </S.Footer>
    </S.Column>
  );
};
