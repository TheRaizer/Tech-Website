import { ACTION_TYPES } from "../Actions/UserReducerActions";

const initialState = {
  currentUser: {},
};

export function UserReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.CREATE:
      let newUser = action.payload;
      return {
        ...state,
        currentUser: newUser,
      };
    //no need to use any other ACTION_TYPES as we do not need to modify any of the state when using them. default case will run
    case ACTION_TYPES.FETCH:
      let user = action.payload;
      return {
        ...state,
        currentUser: user,
      };
    default:
      return state;
  }
}

export default UserReducer;
