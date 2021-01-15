import { products } from "./api";

export const ACTION_TYPES = {
  FETCH_BY_CATEGORY: "FETCH_BY_CATEGORY",
};

export const fetchProductsByCategoryCode = (categoryCode) => (dispatch) => {
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
