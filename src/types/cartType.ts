export enum actionCartType {
  GET_LIST = "GET_LIST",
  REMOVE_ITEM = "REMOVE_ITEM",
  DECREASE_AMOUNT = "DECREASE_AMOUNT",
  INCREASE_AMOUNT = "INCREASE_AMOUNT",
  CLEAR_CARD = "CLEAR_CARD",
  UPDATE_TOTAL = "UPDATE_TOTAL",
  SHOW_ALERT = "SHOW_ALERT",
  REMOVE_ALERT = "REMOVE_ALERT",
}

export interface typeInitCart {
  listCart: cartItemType[];
  totalCart: number;
  shippingFee: number;
  showAlert: boolean;
  mgs: string;
  type: string;
}

export interface cartItemType {
  image: string;
  wine: string;
  id: number;
  price: number;
  available: number;
  amount: number;
}

export interface typeAction {
  type: string;
  payload?: any;
}
