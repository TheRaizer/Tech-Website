import { ACTION_TYPES } from "../Actions/UserReducerActions";

const initialState = {
  username: "",
};

export function UserReducer(state = initialState, action) {
  switch (action.type) {
    //we do not want to return anything on fetch as it will return the entire user including private info
    case ACTION_TYPES.FETCH_USERNAME:
      return {
        ...state,
        username: action.payload,
      };
    //no need to use any other ACTION_TYPES as we do not need to modify any of the state when using them. default case will run
    default:
      return state;
  }
}

export default UserReducer;
