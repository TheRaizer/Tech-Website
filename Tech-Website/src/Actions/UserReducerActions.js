import { users } from "./api";

// actions that can be used in the persistent UserReducer
export const ACTION_TYPES = {
  CREATE: "CREATE_USER",
  UPDATE: "UPDATE_USER",
  DELETE: "DELETE_USER",
  FETCH_ALL: "FETCH_ALL_USERS",
  FETCH: "FETCH",
  FETCH_USERNAME: "FETCH_USERNAME",
  FETCH_USER_WITH_CREDENTIALS: "FETCH_USER_WITH_CREDENTIALS",
  USER_EXISTS: "USER_EXISTS",
};

export const fetchUsername = (id) => (dispatch) => {
  // fetches a username which is dispatched to the UserReducer
  users()
    .fetchUsernameById(id)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.FETCH_USERNAME,
        payload: response.data,
      });
    })
    .catch((err) => console.log(err));
};

export const fetchUserByEmailandPassword = (
  email,
  password,
  onFailure,
  onSuccesful
) => (dispatch) => {
  /* fetches a user by email and password, then dispatches the users username to the 
  UserReducer. If it was succesful it will run a onSuccesful function passing in the
  userId */

  users()
    .fetchUserByEmailandPassword(email, password)
    .then((response) => {
      const user = response.data;
      dispatch({
        type: ACTION_TYPES.FETCH_USER_WITH_CREDENTIALS,
        payload: user.username,
      });
      onSuccesful(response.data.userId);
    })
    .catch((err) => {
      onFailure();
      console.log(err);
    });
};

export const fetchAllUsers = () => (dispatch) => {
  /* fetches all the users and dispatches the data to the
  UserReducer. */
  users()
    .fetchAll()
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.FETCH_ALL,
        payload: response.data,
      });
    })
    .catch((err) => console.log(err));
};

export const createUser = (newUser, onSuccessful) => (dispatch) => {
  // creates a user and runs a onSuccesful callback if no error is caught. Dispatches to UserReducer.

  users()
    .createUser(newUser)
    .then((response) => {
      const user = response.data;
      dispatch({
        type: ACTION_TYPES.CREATE,
        payload: user,
      });
      onSuccessful(user.userId);
    })
    .catch((err) => console.log(err));
};

export const updateUser = (id, updatedUser, onSuccessful) => (dispatch) => {
  // updates a user given the proper data, then runs a callback if succesful. Dispatches to UserReducer.
  users()
    .updateUser(id, updatedUser)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.UPDATE,
        payload: updatedUser,
      });
      onSuccessful(response.data.userId);
    })
    .catch((err) => console.log(err));
};

export const deleteUser = (id, onSuccessful) => (dispatch) => {
  // deletes a user by id and runs a callback if succesful. Dispatches to UserReducer.
  users()
    .deleteUser(id)
    .then(() => {
      dispatch({
        type: ACTION_TYPES.DELETE,
        payload: id,
      });
      onSuccessful();
    })
    .catch((err) => console.log(err));
};

export const fetchUser = (id) => (dispatch) => {
  // fetches a user given an id. Dispatches to UserReducer.
  users()
    .fetchById(id)
    .then((response) => {
      const user = response.data;
      dispatch({
        type: ACTION_TYPES.FETCH,
        payload: user,
      });
    })
    .catch((err) => console.log(err));
};
