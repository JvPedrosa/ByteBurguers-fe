import React, { useContext } from "react";
import * as S from "./styles";
import CartContext from "../../context/CartProvider";
import { formatCurrency } from "../../utils/formatCurrency";

interface CartItemProps {
  cartItem: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
    quantity: number;
  };
}

export const CartItem = ({ cartItem }: CartItemProps): React.ReactElement => {
  const { dispatch, REDUCER_ACTIONS } = useContext(CartContext);
  const itemTotal = cartItem.price * cartItem.quantity;

  const handleDecreaseQuantity = () => {
    if (cartItem.quantity === 1) {
      dispatch({
        type: REDUCER_ACTIONS.REMOVE,
        payload: { id: cartItem.id }, // Pass an object with only the id
      });
    } else {
      dispatch({
        type: REDUCER_ACTIONS.QUANTITY,
        payload: { ...cartItem, quantity: cartItem.quantity - 1 },
      });
    }
  };

  const handleIncreaseQuantity = () => {
    dispatch({
      type: REDUCER_ACTIONS.QUANTITY,
      payload: { ...cartItem, quantity: cartItem.quantity + 1 },
    });
  };

  return (
    <S.Container>
      <S.DataContainer>
        <S.Name>{cartItem.title}</S.Name>
        <S.Price>{formatCurrency(cartItem.price)}</S.Price>
        <S.QuantityContainer>
          <S.QuantityButton onClick={handleDecreaseQuantity}>
            -
          </S.QuantityButton>
          <S.Quantity>{cartItem.quantity}</S.Quantity>
          <S.QuantityButton onClick={handleIncreaseQuantity}>
            +
          </S.QuantityButton>
        </S.QuantityContainer>
        <S.TotalPerItem>Total: {formatCurrency(itemTotal)}</S.TotalPerItem>
      </S.DataContainer>
      <S.ImageContainer>
        <S.Image src={cartItem.image} alt={cartItem.title} />
      </S.ImageContainer>
    </S.Container>
  );
};
