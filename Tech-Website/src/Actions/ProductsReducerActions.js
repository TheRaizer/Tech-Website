import { products } from "./api";

// actions that are used in the ProductReducer
export const ACTION_TYPES = {
  FETCH_BY_CATEGORY: "FETCH_BY_CATEGORY",
  FETCH_ALL: "FETCH_ALL",
};

export const fetchProductsByCategoryCode = (categoryCode) => (dispatch) => {
  /* this function gets all the products that belong
  in a specific category and dispatches them to the
  ProductReducer. */

  products()
    .getProductsByCategoryCode(categoryCode)
    .then((response) => {
      const productsInCategory = response.data;
      dispatch({
        type: ACTION_TYPES.FETCH_BY_CATEGORY,
        payload: productsInCategory,
      });
    })
    .catch((err) => console.log(err));
};

export const fetchAllProducts = (onSuccesful) => (dispatch) => {
  products()
    .getProducts()
    .then((response) => {
      const products = response.data;
      dispatch({
        type: ACTION_TYPES.FETCH_ALL,
        payload: products,
      });
      onSuccesful(products);
    })
    .catch((err) => console.log(err));
};
