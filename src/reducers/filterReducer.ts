import { typeAction, typeActions, typeStateFilter } from "../types/filterType";
import { typeItemWine } from "../types/homeTypes";

const {
  GET_LIST,
  CHANGE_SORT,
  CHANGE_FILTER,
  CLEAR_FILTER,
  UPDATE_LIST_FILTER,
  UPDATE_LIST_SORT,
} = typeActions;

export const filterReducer = (state: typeStateFilter, action: typeAction) => {
  switch (action.type) {
    case GET_LIST: {
      const newPayload = [...action.payload] as typeItemWine[];

      const listPrice = newPayload.map((item) => item.price);

      return {
        ...state,
        defaultList: action.payload,
        filterProduct: action.payload,
        filter: {
          ...state.filter,
          maxPrice: Math.max(...listPrice),
          price: Math.max(...listPrice),
        },
      };
    }
    case CHANGE_FILTER: {
      return {
        ...state,
        filter: {
          ...state.filter,
          [action.payload.type]: action.payload.value,
        },
      };
    }

    case CLEAR_FILTER: {
      return {
        ...state,
        filter: {
          ...state.filter,
          search: "",
          winery: "all",
          rating: "all",
          price: state.filter.maxPrice,
        },
      };
    }
    case CHANGE_SORT: {
      return { ...state, sort: action.payload };
    }
    case UPDATE_LIST_FILTER: {
      const {
        defaultList,
        filter: { search, winery, rating, price },
      } = state;

      let newFilterList = [...defaultList];
      if (search) {
        newFilterList = newFilterList.filter((product) =>
          product.wine.toLowerCase().startsWith(search.toLowerCase())
        );
      }

      if (winery.toLowerCase() !== "all") {
        newFilterList = newFilterList.filter((product) => {
          return product.winery === winery;
        });
      }

      if (rating !== "all") {
        newFilterList = newFilterList.filter((product) => {
          return product.rating.average >= +rating;
        });
      }

      newFilterList = newFilterList.filter((product) => {
        return product.price <= price;
      });
      return { ...state, filterProduct: newFilterList };
    }
    case UPDATE_LIST_SORT: {
      const { sort, filterProduct } = state;
      let tempProducts = [...filterProduct];
      if (sort === "priceLowest") {
        tempProducts = filterProduct.sort((a, b) => {
          return a.price - b.price;
        });
      }
      if (sort === "priceHighest") {
        tempProducts = filterProduct.sort((a, b) => {
          return b.price - a.price;
        });
      }
      if (sort === "name-a") {
        tempProducts = filterProduct.sort((a, b) => {
          return a.wine.localeCompare(b.wine);
        });
      }
      if (sort === "name-z") {
        tempProducts = filterProduct.sort((a, b) => {
          return b.wine.localeCompare(a.wine);
        });
      }

      return { ...state, filterProduct: tempProducts };
    }
    default: {
      return { ...state };
    }
  }
};
