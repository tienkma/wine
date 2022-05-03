export enum typeActions {
  GET_LIST = "GET_LIST",
  CHANGE_SORT = "CHANGE_SORT",
  CHANGE_FILTER = "CHANGE_FILTER",
  CLEAR_FILTER = "CLEAR_FILTER",
  UPDATE_LIST_FILTER = "UPDATE_LIST_FILTER",
  UPDATE_LIST_SORT = "UPDATE_LIST_SORT",
}

export interface typeStateFilter {
  defaultList: typeItemWine[];
  filterProduct: typeItemWine[];
  sort: string;
  filter: {
    search: string;
    winery: string;
    rating: string;
    price: number;
    maxPrice: number;
  };
}

interface typeItemWine {
  winery: string;
  wine: string;
  rating: { average: number; reviews: string };
  image: string;
  id: number;
  price: number;
  description: string;
  available: number;
}

export interface typeAction {
  type: string;
  payload?: any;
}
