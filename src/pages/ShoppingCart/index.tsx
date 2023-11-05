import { useContext } from "react";
import CartContext from "../../context/CartProvider";
import { CartItem } from "../../components/CartItem";
import * as S from "./styles";
import { formatCurrency } from "../../utils/formatCurrency";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export const ShoppingCart = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <S.Container>
      <S.BackButton onClick={handleGoHome}>
        <ArrowBackIosNewIcon />
      </S.BackButton>{" "}
      {cart.length === 0 ? (
        <S.EmptyCart>Seu carrinho está vazio</S.EmptyCart>
      ) : (
        <S.ItemsCart>
          {cart.map((cartItem) => {
            return <CartItem key={cartItem.id} cartItem={cartItem} />;
          })}
        </S.ItemsCart>
      )}
      {cart.length > 0 && (
        <S.CartTotal>
          <S.Total>Total: {formatCurrency(cartTotal)}</S.Total>
          <S.Button>Finalizar compra</S.Button>
        </S.CartTotal>
      )}
    </S.Container>
  );
};
