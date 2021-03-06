import { orders } from "./api";

// actions that are used in the OrderReducer
export const ACTION_TYPES = {
  CREATE_ORDER: "CREATE_ORDER",
  FETCH_USER_ORDERS: "FETCH_USER_ORDERS",
};

export const createOrder = (newOrder, addOrderProductOnCreate) => (
  dispatch
) => {
  /* this function creates an order, dispatches it to the OrderReducer to have 
  its uuid stored in the state, then adds a product that is passed in to the order */

  orders()
    .createOrder(newOrder)
    .then((response) => {
      const order = response.data;
      dispatch({
        type: ACTION_TYPES.CREATE_ORDER,
        payload: order,
      });
      addOrderProductOnCreate(response.data.orderId);
    })
    .catch((err) => console.log(err));
};

export const fetchUserOrders = (userId, hasFinished) => (dispatch) => {
  /* this function gets all of a users orders, dispatching those orders to the
  OrderReducer to have each orders uuids stored in the state.*/

  orders()
    .fetchUserOrders(userId)
    .then((response) => {
      const userOrders = response.data;
      dispatch({
        type: ACTION_TYPES.FETCH_USER_ORDERS,
        payload: userOrders,
      });
      hasFinished();
    })
    .catch((err) => {
      dispatch({
        type: ACTION_TYPES.FETCH_USER_ORDERS,
        payload: [],
      });

      hasFinished();
      console.log(err);
    });
};
