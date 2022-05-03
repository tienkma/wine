import { createContext, useContext, useEffect, useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer";
import { actionCartType, typeInitCart } from "../types/cartType";

const initState: typeInitCart = {
  listCart: [],
  shippingFee: 5.34,
  totalCart: 0,
  showAlert: false,
  mgs: "",
  type: "",
};
const cartContext = createContext<{
  state: typeInitCart;
  removeItem: (id: number) => void;
  decreAmount: (id: number) => void;
  increAmuont: (id: number) => void;
  getCartItem: (
    id: number,
    wine: string,
    price: number,
    available: number,
    image: string,
    amount: number
  ) => void;
  clearCart: () => void;
  showAlert: (mgs: string, type: string) => void;
  removeAlert: () => void;
}>({
  state: initState,
  removeItem: (id: number) => {},
  decreAmount: (id: number) => {},
  increAmuont: (id: number) => {},
  getCartItem: (
    id: number,
    wine: string,
    price: number,
    available: number,
    image: string,
    amount: number
  ) => {},
  clearCart: () => {},
  showAlert: (mgs: string, type: string) => {},
  removeAlert: () => {},
});

const {
  GET_LIST,
  REMOVE_ITEM,
  DECREASE_AMOUNT,
  INCREASE_AMOUNT,
  CLEAR_CARD,
  UPDATE_TOTAL,
  SHOW_ALERT,
  REMOVE_ALERT,
} = actionCartType;
const CartProvider: React.FC = (props) => {
  const [state, dispatch] = useReducer(cartReducer, initState);
  const removeItem = (id: number) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };
  const decreAmount = (id: number) => {
    dispatch({ type: DECREASE_AMOUNT, payload: id });
  };
  const increAmuont = (id: number) => {
    dispatch({ type: INCREASE_AMOUNT, payload: id });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CARD });
  };
  const showAlert = (mgs: string, type: string) => {
    dispatch({ type: SHOW_ALERT, payload: { mgs, type } });
  };
  const removeAlert = () => {
    dispatch({ type: REMOVE_ALERT });
  };
  const getCartItem = (
    id: number,
    wine: string,
    price: number,
    available: number,
    image: string,
    count: number
  ) => {
    dispatch({
      type: GET_LIST,
      payload: { id, wine, price, available, image, count },
    });
  };

  useEffect(() => {
    dispatch({ type: UPDATE_TOTAL });
  }, [state.listCart]);
  return (
    <cartContext.Provider
      value={{
        state,
        removeItem,
        decreAmount,
        increAmuont,
        clearCart,
        getCartItem,
        showAlert,
        removeAlert,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(cartContext);
};

export { CartProvider, useCartContext };
