import { ACTION_TYPES } from "../Actions/UserReducerActions";

const initialState = {
  orderIds: [], //this can be changed to orderNumber
};

export function OrderReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.CREATE_ORDER:
      return {
        ...state,
        orderIds: [...state.orderIds, action.payload.orderId],
      };
    case ACTION_TYPES.FETCH_USER_ORDERS:
      const orders = action.payload;
      let orderIds = [];
      orders.forEach((x) => orderIds.push(x));
      return {
        ...state,
        orderIds: orderIds,
      };
    //no need to use any other ACTION_TYPES as we do not need to modify any of the state when using them. default case will run
    default:
      return state;
  }
}

export default OrderReducer;
