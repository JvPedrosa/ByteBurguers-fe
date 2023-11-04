import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import * as S from "./styles";
import MemoizedProduct from "../../components/Product";
import { CartIcon } from "../../components/CartIcon";

interface ShoppingCartProps {
  viewCart: boolean;
}

export const Home = ({ viewCart }: ShoppingCartProps) => {
  const { products } = useProducts();
  const { dispatch, REDUCER_ACTIONS, cart } = useCart();

  return (
    <>
      <S.Row>
        {products.map((product) => {
          const inCart = cart.some((cartItem) => cartItem.id === product.id);
          return (
            <MemoizedProduct
              key={product.id}
              product={product}
              dispatch={dispatch}
              REDUCER_ACTIONS={REDUCER_ACTIONS}
              inCart={inCart}
            />
          );
        })}
      </S.Row>
      {viewCart && <CartIcon />}
    </>
  );
};
