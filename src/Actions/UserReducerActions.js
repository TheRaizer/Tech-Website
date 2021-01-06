import users from "./api";

export const ACTION_TYPES = {
  CREATE: "CREATE_USER",
  UPDATE: "UPDATE_USER",
  DELETE: "DELETE_USER",
  FETCH_ALL: "FETCH_ALL_USERS",
  FETCH: "FETCH",
};

export const fetchAllUsers = () => (dispatch) => {
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
  users()
    .create(newUser)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.CREATE,
        payload: response.data,
      });
      onSuccessful(response.data.userId);
    })
    .catch((err) => console.log(err));
};

export const updateUser = (id, updatedUser, onSuccessful) => (dispatch) => {
  users()
    .update(id, updatedUser)
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
  users()
    .delete(id)
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
  users()
    .fetchById(id)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.FETCH,
        payload: response.data,
      });
    })
    .catch((err) => console.log(err));
};
