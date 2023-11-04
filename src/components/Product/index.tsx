import { ReactElement, memo } from "react";
import { formatCurrency } from "../../utils/formatCurrency";
import * as S from "./styles";
import { ProductType } from "../../context/ProductsProvider";
import { ReducerAction, ReducerActionType } from "../../context/CartProvider";

type PropsType = {
  product: ProductType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
  inCart: boolean;
};

const Product = ({
  product,
  dispatch,
  REDUCER_ACTIONS,
  inCart,
}: PropsType): ReactElement => {
  const onAddToCart = () => {
    dispatch({
      type: REDUCER_ACTIONS.ADD,
      payload: {
        id: product.id,
        name: product.title,
        price: product.price,
        qty: 1,
      },
    });
  };

  return (
    <S.Column key={product.id}>
      <S.ProductImage src={product.image} alt={product.title} />
      <S.ProductName>{product.title}</S.ProductName>
      <S.ProductPrice>{formatCurrency(product.price)}</S.ProductPrice>
      <S.Footer>
        {inCart ? (
          <S.Button
            action="remove"
            onClick={() =>
              dispatch({
                type: REDUCER_ACTIONS.REMOVE,
                payload: {
                  id: product.id,
                  name: product.title,
                  price: product.price,
                  qty: 1,
                },
              })
            }
          >
            Remove
          </S.Button>
        ) : (
          <S.Button onClick={onAddToCart} action="add">
            Add to cart
          </S.Button>
        )}
      </S.Footer>
    </S.Column>
  );
};

function areProductsEqual(
  { product: prevProduct, inCart: prevInCart }: PropsType,
  { product: nextProduct, inCart: nextInCart }: PropsType
) {
  return (
    Object.keys(prevProduct).every((key) => {
      return (
        prevProduct[key as keyof ProductType] ===
        nextProduct[key as keyof ProductType]
      );
    }) && prevInCart === nextInCart
  );
}
const MemoizedProduct = memo<typeof Product>(Product, areProductsEqual);

export default MemoizedProduct;
