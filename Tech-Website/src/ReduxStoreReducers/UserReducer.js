import { ACTION_TYPES } from "../Actions/UserReducerActions";

const initialState = {
  username: "",
  orderIds: [], //this can be changed to orderNumber
};

export function UserReducer(state = initialState, action) {
  switch (action.type) {
    //we do not want to return anything on fetch as it will return the entire user including private info
    case ACTION_TYPES.FETCH_USERNAME:
      return {
        ...state,
        username: action.payload,
      };
    case ACTION_TYPES.FETCH_USER_WITH_CREDENTIALS:
      return {
        ...state,
        username: action.payload,
      };
    case ACTION_TYPES.CREATE_ORDER:
      return {
        ...state,
        orders: [...state.orders, action.payload.orderId],
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

export default UserReducer;
