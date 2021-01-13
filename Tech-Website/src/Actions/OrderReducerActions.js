import { orders } from "./api";

export const ACTION_TYPES = {
  CREATE_ORDER: "CREATE_ORDER",
  FETCH_USER_ORDERS: "FETCH_USER_ORDERS",
};

export const createOrder = (newOrder) => (dispatch) => {
  orders()
    .createOrder(newOrder)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.CREATE_ORDER,
        payload: response.data,
      });
    })
    .catch((err) => console.log(err));
};

export const fetchUserOrders = (userId) => (dispatch) => {
  orders()
    .fetchUserOrders(userId)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.FETCH_USER_ORDERS,
        payload: response.data,
      });
    })
    .catch((err) => console.log(err));
};
