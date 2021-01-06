import { ACTION_TYPES } from "../Actions/UserReducerActions";

const initialState = {
  users: [],
  fetchedUser: {},
};

export function UserReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL:
      let newUsers = action.payload;
      return {
        ...state,
        users: newUsers,
      };
    case ACTION_TYPES.CREATE:
      let newUser = action.payload;
      return {
        ...state,
        users: [...state.users, newUser],
      };

    case ACTION_TYPES.DELETE:
      let userToDelete = action.payload;
      return {
        ...state,
        users: state.users.filter(
          (user) => user.UserId !== userToDelete.UserId
        ),
      };
    case ACTION_TYPES.UPDATE:
      let updatedUser = action.payload;
      return {
        ...state,
        users: state.users.map((user) =>
          user.UserId === updatedUser.UserId ? updatedUser : user
        ),
      };
    case ACTION_TYPES.FETCH:
      let user = action.payload;
      return {
        ...state,
        fetchedUser: user,
      };
    default:
      return state;
  }
}

export default UserReducer;
