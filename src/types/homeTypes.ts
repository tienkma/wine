export enum types {
  GET_HOMELIST = "GET_HOMELIST",
  GET_HOME_LOADDING = "GET_HOME_LOADDING",
  GET_HOME_ERROR = "GET_HOME_ERROR",
  SET_VERIFICATION = "SET_VERIFICATION",
  ITEM_LOADDING = "ITEM_LOADDING",
  GET_ITEM = "GET_ITEM",
  GET_ITEM_ERROR = "GET_ITEM_ERROR",
  OPEN_SIDEBAR = "OPEN_SIDEBAR",
  CLOSE_SIDEBAR = "CLOSE_SIDEBAR",
}

export interface typeAction {
  type: types;
  payload?: any;
}

export interface typeState {
  homeCartList: typeItemWine[];
  home_featured: typeItemWine[];
  home_error: boolean;
  home_loading: boolean;
  home_navbar: boolean;
  home_verification: boolean;
  item_data: typeItemWine;
  item_error: boolean;
  item_loading: boolean;
}

export interface typeItemWine {
  winery: string;
  wine: string;
  rating: { average: number; reviews: string };
  image: string;
  id: number;
  price: number;
  description: string;
  available: number;
}
