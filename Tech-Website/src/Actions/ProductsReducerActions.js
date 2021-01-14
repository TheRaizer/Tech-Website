import { products } from "./api";

export const ACTION_TYPES = {
  FETCH_BY_CATEGORY: "FETCH_BY_CATEGORY",
};

export const fetchByCategory = (category) => (dispatch) => {
  products()
    .getProductsByCategory(category)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.FETCH_BY_CATEGORY,
        payload: response.data,
      });
    })
    .catch((err) => console.log(err));
};
