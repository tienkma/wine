import react, { createContext, useContext, useEffect, useReducer } from "react";
import homeReducer from "../reducers/homeReducer";
import { typeItemWine, types, typeState } from "../types/homeTypes";
import { telephoneAPI } from "../utils/api";
import { getItem } from "../utils/apiGetItem";

const initState: typeState = {
  homeCartList: [],
  home_featured: [],
  home_error: true,
  home_loading: true,
  home_navbar: false,
  home_verification: false,
  item_data: {
    wine: "",
    winery: "",
    id: 0,
    price: 0,
    description: "",
    available: 0,
    rating: { average: 0, reviews: "" },
    image: "",
  },
  item_error: true,
  item_loading: true,
};
const HomeContext = createContext<{
  state: typeState;
  setVerification: () => void;
  getItemWine: (id: number) => void;
  openSidebar: () => void;
  closeSidebar: () => void;
}>({
  state: initState,
  setVerification: () => {},
  getItemWine: () => {},
  openSidebar: () => {},
  closeSidebar: () => {},
});

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
} = types;
const HomeProvider: React.FC = (props) => {
  const [state, dispatch] = useReducer(homeReducer, initState);

  const getHomeList = async () => {
    dispatch({ type: GET_HOME_LOADDING });
    try {
      const data = (await telephoneAPI()) as typeItemWine[];
      // const newData = data.map((item) => item.winery);
      // const nreData = new Set([...newData]);
      // console.log(nreData);

      dispatch({ type: GET_HOMELIST, payload: data });
    } catch (error) {
      dispatch({ type: GET_HOME_ERROR });
    }
  };
  const getItemWine = async (id: number) => {
    dispatch({ type: ITEM_LOADDING });
    try {
      const data = (await getItem(id)) as typeItemWine[];

      dispatch({ type: GET_ITEM, payload: data });
    } catch (error) {
      dispatch({ type: GET_ITEM_ERROR });
    }
  };
  useEffect(() => {
    getHomeList();
  }, []);

  const setVerification = () => {
    dispatch({ type: SET_VERIFICATION });
  };
  const openSidebar = () => {
    dispatch({ type: OPEN_SIDEBAR });
  };
  const closeSidebar = () => {
    dispatch({ type: CLOSE_SIDEBAR });
  };

  const value = {
    state,
    setVerification,
    getItemWine,
    openSidebar,
    closeSidebar,
  };
  return (
    <HomeContext.Provider value={value}>{props.children}</HomeContext.Provider>
  );
};

const useHomeContact = () => {
  return useContext(HomeContext);
};

export { HomeProvider, useHomeContact };
