import { ACTION_TYPES } from "../Actions/UserReducerActions";

const initialState = {
  orderNumbers: [],
};

export function OrderReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.CREATE_ORDER:
      console.log("order number created ", action.payload.orderNumber);
      return {
        ...state,
        orderNumbers: [...state.orderNumbers, action.payload.orderNumber],
      };
    case ACTION_TYPES.FETCH_USER_ORDERS:
      const orders = action.payload;
      let orderNumbers = [];
      orders.forEach((x) => orderNumbers.push(x.orderNumber));
      console.log("order numbers fetched ", orderNumbers);
      return {
        ...state,
        orderNumbers: orderNumbers,
      };
    //no need to use any other ACTION_TYPES as we do not need to modify any of the state when using them. default case will run
    default:
      return state;
  }
}

export default OrderReducer;
