import users from "./api";

export const ACTION_TYPES = {
  CREATE: "CREATE_USER",
  CREATE_ORDER: "CREATE_ORDER",
  UPDATE: "UPDATE_USER",
  DELETE: "DELETE_USER",
  FETCH_ALL: "FETCH_ALL_USERS",
  FETCH_USER_ORDERS: "FETCH_USER_ORDERS",
  FETCH: "FETCH",
  FETCH_USERNAME: "FETCH_USERNAME",
  FETCH_USER_WITH_CREDENTIALS: "FETCH_USER_WITH_CREDENTIALS",
  USER_EXISTS: "USER_EXISTS",
};

export const fetchUsername = (id) => (dispatch) => {
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

export const isExistingUser = async (email) => {
  // this is not kept in the store so it does not need a dispatch function
  try {
    const response = await users().isExistingUser(email);
    return response.data;
  } catch (err) {
    return console.log(err);
  }
};

export const fetchUserByEmailandPassword = (
  email,
  password,
  onFailure,
  onSuccesful
) => (dispatch) => {
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
    .createUser(newUser)
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

export const createOrder = (newOrder) => (dispatch) => {
  users()
    .createOrder(newOrder)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.CREATE_ORDER,
        payload: response.data,
      });
    })
    .catch((err) => console.log(err));
};

export const fetchUserOrders = (userId) => (dispatch) => {
  users()
    .fetchUserOrders(userId)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.FETCH_USER_ORDERS,
        payload: response.data,
      });
    })
    .catch((err) => console.log(err));
};
