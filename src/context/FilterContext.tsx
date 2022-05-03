import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { filterReducer } from "../reducers/filterReducer";
import { typeActions, typeStateFilter } from "../types/filterType";
import { useHomeContact } from "./HomeContext";

const filterContext = createContext<{
  state: typeStateFilter;
  changeSort: (type: string) => void;
  changeFilter: (value: any, type: string) => void;
  clearFilter: () => void;
}>({
  state: {
    defaultList: [],
    filterProduct: [],
    sort: "priceLowest",
    filter: {
      search: "",
      winery: "all",
      rating: "all",
      price: 0,
      maxPrice: 0,
    },
  },
  changeSort: () => {},
  changeFilter: () => {},
  clearFilter: () => {},
});

const initState: typeStateFilter = {
  defaultList: [],
  filterProduct: [],
  sort: "priceLowest",
  filter: {
    search: "",
    winery: "all",
    rating: "all",
    price: 0,
    maxPrice: 0,
  },
};

const {
  GET_LIST,
  CHANGE_SORT,
  CHANGE_FILTER,
  CLEAR_FILTER,
  UPDATE_LIST_FILTER,
  UPDATE_LIST_SORT,
} = typeActions;
const FilterProvider: React.FC = (props) => {
  const [state, dispatch] = useReducer(filterReducer, initState);

  const {
    state: { homeCartList },
  } = useHomeContact();
  useEffect(() => {
    dispatch({ type: GET_LIST, payload: homeCartList });
  }, [homeCartList]);

  const changeSort = (type: string) => {
    dispatch({ type: CHANGE_SORT, payload: type });
  };

  const changeFilter = (value: any, type: string) => {
    dispatch({ type: CHANGE_FILTER, payload: { value, type } });
  };
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  useEffect(() => {
    dispatch({ type: UPDATE_LIST_FILTER });
    dispatch({ type: UPDATE_LIST_SORT });
  }, [state.sort, state.filter]);
  const value = { state, changeSort, changeFilter, clearFilter };

  return (
    <filterContext.Provider value={value}>
      {props.children}
    </filterContext.Provider>
  );
};

const useFilterContext = () => {
  return useContext(filterContext);
};

export { FilterProvider, useFilterContext };
