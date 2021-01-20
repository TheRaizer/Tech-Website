import { ACTION_TYPES } from "../Actions/OrderReducerActions";

const initialState = {
  orderUUIDs: [],
};

export function OrderReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.CREATE_ORDER:
      console.log("order number created ", action.payload.orderUUID);
      return {
        ...state,
        orderUUIDs: [...state.orderUUIDs, action.payload.orderUUID],
      };
    case ACTION_TYPES.FETCH_USER_ORDERS:
      const orders = action.payload;
      let orderUUIDs = [];
      orders.forEach((x) => orderUUIDs.push(x.orderUUID));
      console.log("order numbers fetched ", orderUUIDs);
      return {
        ...state,
        orderUUIDs: orderUUIDs,
      };
    //no need to use any other ACTION_TYPES as we do not need to modify any of the state when using them. default case will run
    default:
      return state;
  }
}

export default OrderReducer;
