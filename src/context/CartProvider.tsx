import { useMemo, useReducer, createContext, ReactElement } from "react";

export type CartItemType = {
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

type CartStateType = { cart: CartItemType[] };

const initCartState: CartStateType = { cart: [] };

const REDUCER_ACTION_TYPE = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  QUANTITY: "QUANTITY",
  SUBMIT: "SUBMIT",
};

export type ReducerActionType = typeof REDUCER_ACTION_TYPE;

export type ReducerAction = {
  type: string;
  payload?: CartItemType | { id: number };
};

const reducer = (
  state: CartStateType,
  action: ReducerAction
): CartStateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD: {
      if (!action.payload) {
        throw new Error("action.payload missing in ADD action");
      }

      const {
        id,
        title,
        price,
        description,
        category,
        image,
        rating,
        quantity,
      } = action.payload as CartItemType;

      const filteredCart: CartItemType[] = state.cart.filter(
        (item) => item.id !== id
      );

      const itemExists: CartItemType | undefined = state.cart.find(
        (item) => item.id === id
      );

      const qty: number = itemExists
        ? itemExists.quantity + quantity
        : quantity;

      return {
        ...state,
        cart: [
          ...filteredCart,
          {
            id,
            title,
            price,
            description,
            category,
            image,
            rating,
            quantity: qty,
          },
        ],
      };
    }

    case REDUCER_ACTION_TYPE.REMOVE: {
      if (!action.payload || typeof action.payload === "number") {
        throw new Error(
          "action.payload missing or incorrect type in REMOVE action"
        );
      }

      const { id } =
        typeof action.payload === "object" && "id" in action.payload
          ? action.payload
          : { id: undefined };

      if (id === undefined) {
        throw new Error("Item ID is missing in REMOVE action payload");
      }

      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== id),
      };
    }

    case REDUCER_ACTION_TYPE.QUANTITY: {
      if (!action.payload || typeof action.payload === "number") {
        throw new Error(
          "action.payload is missing or incorrect type in QUANTITY action"
        );
      }

      if ("quantity" in action.payload) {
        const { id, quantity } = action.payload as CartItemType;

        if (quantity < 1) {
          const filteredCart: CartItemType[] = state.cart.filter(
            (item) => item.id !== id
          );
          return { ...state, cart: filteredCart };
        } else {
          return {
            ...state,
            cart: state.cart.map((item) =>
              item.id === id ? { ...item, quantity } : item
            ),
          };
        }
      } else {
        throw new Error("Expected CartItemType for QUANTITY action");
      }
    }

    case REDUCER_ACTION_TYPE.SUBMIT: {
      return { ...state, cart: [] };
    }
    default:
      throw new Error("Unidentified reducer action type");
  }
};

const useCartContext = (initCartState: CartStateType) => {
  const [state, dispatch] = useReducer(reducer, initCartState);

  const REDUCER_ACTIONS = useMemo(() => {
    return REDUCER_ACTION_TYPE;
  }, []);

  const totalItems = state.cart.reduce((previousValue, cartItem) => {
    return previousValue + cartItem.quantity;
  }, 0);

  const totalPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(
    state.cart.reduce((previousValue, cartItem) => {
      return previousValue + cartItem.quantity * cartItem.price;
    }, 0)
  );

  const sortedCart = useMemo(() => {
    return [...state.cart].sort((a, b) => a.id - b.id);
  }, [state.cart]);

  return {
    dispatch,
    REDUCER_ACTIONS,
    totalItems,
    totalPrice,
    cart: sortedCart,
  };
};

export type UseCartContextType = ReturnType<typeof useCartContext>;

const initCartContextState: UseCartContextType = {
  dispatch: () => {},
  REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
  totalItems: 0,
  totalPrice: "",
  cart: [],
};

const CartContext = createContext<UseCartContextType>(initCartContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const CartProvider = ({ children }: ChildrenType): ReactElement => {
  return (
    <CartContext.Provider value={useCartContext(initCartState)}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
