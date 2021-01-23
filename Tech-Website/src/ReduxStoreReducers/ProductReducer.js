import { ACTION_TYPES } from "../Actions/ProductsReducerActions";

const initialState = {
  products: [],
};

export function ProductReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.FETCH_BY_CATEGORY:
      console.log("Products fetched ", action.payload);
      return {
        ...state,
        products: action.payload,
      };
    case ACTION_TYPES.FETCH_ALL:
      console.log("Fetched all ", action.payload);
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
}

export default ProductReducer;
