import { typeAction, types, typeState } from "../types/homeTypes";

const {
  GET_HOMELIST,
  GET_HOME_LOADDING,
  GET_HOME_ERROR,
  SET_VERIFICATION,
  ITEM_LOADDING,
  GET_ITEM,
  GET_ITEM_ERROR,
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR,
  SET_IS_LOGIN,
} = types;

const homeReducer = (state: typeState, action: typeAction) => {
  switch (action.type) {
    case GET_HOME_LOADDING: {
      return { ...state, home_error: false, home_loading: true };
    }
    case GET_HOME_ERROR: {
      return { ...state, home_error: true, home_loading: false };
    }
    case GET_HOMELIST: {
      return {
        ...state,
        homeCartList: action.payload,
        home_featured: action.payload.slice(100, 112),
        home_error: false,
        home_loading: false,
      };
    }
    case SET_VERIFICATION: {
      return { ...state, home_verification: false };
    }
    case ITEM_LOADDING: {
      return { ...state, item_loading: true };
    }
    case GET_ITEM: {
      return {
        ...state,
        item_loading: false,
        item_error: false,
        item_data: action.payload,
      };
    }
    case GET_ITEM_ERROR: {
      return { ...state, item_loading: false, item_error: true };
    }
    case OPEN_SIDEBAR: {
      return { ...state, home_navbar: true };
    }
    case CLOSE_SIDEBAR: {
      return { ...state, home_navbar: false };
    }
    case SET_IS_LOGIN: {
      return { ...state, isLogin: !state.isLogin };
    }
    default: {
      return state;
    }
  }
};

export default homeReducer;
