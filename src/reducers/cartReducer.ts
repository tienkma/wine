import { typeInitCart, typeAction, actionCartType } from "../types/cartType";

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
export const cartReducer = (state: typeInitCart, action: typeAction) => {
  switch (action.type) {
    case GET_LIST: {
      const { id, wine, price, available, image, count } = action.payload;
      let newList = [...state.listCart];
      const findItem = state.listCart.find((item) => item.id === id);
      if (findItem) {
        newList = newList.map((item) => {
          if (item.id === id) {
            let newAmount = item.amount + count;
            if (newAmount > available) {
              newAmount = available;
            }
            return { ...item, amount: newAmount };
          }
          return item;
        });
      } else {
        newList.push({ ...action.payload, amount: count });
      }
      return { ...state, listCart: newList };
    }
    case REMOVE_ITEM: {
      const { listCart } = state;
      const newList = [...listCart].filter(
        (item) => item.id !== action.payload
      );
      return { ...state, listCart: newList };
    }
    case DECREASE_AMOUNT: {
      const { listCart } = state;
      let newList = [...listCart]
        .map((item) => {
          if (item.id === action.payload) {
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        })
        .filter((item) => item.amount > 0);
      return { ...state, listCart: newList };
    }
    case INCREASE_AMOUNT: {
      const { listCart } = state;
      let newList = [...listCart]
        .map((item) => {
          if (item.id === action.payload) {
            let newCount = item.amount + 1;
            if (newCount > item.available) {
              newCount = item.available;
            }
            return { ...item, amount: newCount };
          }
          return item;
        })
        .filter((item) => item.amount > 0);
      return { ...state, listCart: newList };
    }

    case UPDATE_TOTAL: {
      const { total } = state.listCart.reduce(
        (initTotal, item) => {
          initTotal.total += item.price * item.amount;
          return initTotal;
        },
        { total: 0 }
      );
      return { ...state, totalCart: total };
    }
    case CLEAR_CARD: {
      return { ...state, listCart: [] };
    }
    case SHOW_ALERT: {
      return {
        ...state,
        showAlert: true,
        mgs: action.payload.mgs,
        type: action.payload.type,
      };
    }
    case REMOVE_ALERT: {
      return { ...state, showAlert: false, mgs: "" };
    }
    default:
      return state;
  }
};
