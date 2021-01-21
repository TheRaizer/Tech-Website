import { products } from "./api";

// actions that are used in the ProductReducer
export const ACTION_TYPES = {
  FETCH_BY_CATEGORY: "FETCH_BY_CATEGORY",
};

export const fetchProductsByCategoryCode = (categoryCode) => (dispatch) => {
  /* this function gets all the products that belong
  in a specific category and dispatches them to the
  ProductReducer. */

  products()
    .getProductsByCategoryCode(categoryCode)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.FETCH_BY_CATEGORY,
        payload: response.data,
      });
    })
    .catch((err) => console.log(err));
};
