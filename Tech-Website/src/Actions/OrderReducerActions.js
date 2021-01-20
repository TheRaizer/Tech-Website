import { orders } from "./api";

export const ACTION_TYPES = {
  CREATE_ORDER: "CREATE_ORDER",
  FETCH_USER_ORDERS: "FETCH_USER_ORDERS",
};

export const createOrder = (newOrder, addOrderProductOnCreate) => (
  dispatch
) => {
  orders()
    .createOrder(newOrder)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.CREATE_ORDER,
        payload: response.data,
      });
      addOrderProductOnCreate(response.data.orderId);
    })
    .catch((err) => console.log(err));
};

export const fetchUserOrders = (userId, onSuccess) => (dispatch) => {
  orders()
    .fetchUserOrders(userId)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.FETCH_USER_ORDERS,
        payload: response.data,
      });
      onSuccess();
    })
    .catch((err) => console.log(err));
};
