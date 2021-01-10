export const ACTION_TYPES = {
  SHORT_PASSWORD: "SHORT_PASSWORD",
  LONG_PASSWORD: "LONG_PASSWORD",
  LONG_USERNAME: "LONG_USERNAME",
  MISSING_EMAIL: "MISSING_EMAIL",
  INVALID_EMAIL: "INVALID_EMAIL",
  MISSING_USERNAME: "MISSING_USERNAME",
  NO_MATCHING_PASSWORD: "NO_MATCHING_PASSWORD",
  EMAIL_IN_USE: "EMAIL_IN_USE",
};

const passwordToShort = (dispatch) => {
  dispatch({
    type: ACTION_TYPES.SHORT_PASSWORD,
    payload: true,
  });
};

const passwordToLong = (dispatch) => {
  dispatch({
    type: ACTION_TYPES.LONG_PASSWORD,
    payload: true,
  });
};

const passwordLengthIsValid = (dispatch) => {
  dispatch({
    type: ACTION_TYPES.SHORT_PASSWORD,
    payload: false,
  });
  dispatch({
    type: ACTION_TYPES.LONG_PASSWORD,
    payload: false,
  });
};
const passwordIsMatching = (dispatch) => {
  dispatch({
    type: ACTION_TYPES.NO_MATCHING_PASSWORD,
    payload: false,
  });
};
const passwordIsNotMatching = (dispatch) => {
  dispatch({
    type: ACTION_TYPES.NO_MATCHING_PASSWORD,
    payload: true,
  });
};

const usernameToLong = (dispatch) => {
  dispatch({
    type: ACTION_TYPES.LONG_USERNAME,
    payload: true,
  });
};

const missingUsername = (dispatch) => {
  dispatch({
    type: ACTION_TYPES.MISSING_USERNAME,
    payload: true,
  });
};

const usernameIsValid = (dispatch) => {
  dispatch({
    type: ACTION_TYPES.LONG_USERNAME,
    payload: false,
  });
  dispatch({
    type: ACTION_TYPES.MISSING_USERNAME,
    payload: false,
  });
};

const missingEmail = (dispatch) => {
  dispatch({
    type: ACTION_TYPES.MISSING_EMAIL,
    payload: true,
  });
};
const invalidEmail = (dispatch) => {
  dispatch({
    type: ACTION_TYPES.INVALID_EMAIL,
    payload: true,
  });
};
const emailInUse = (dispatch) => {
  dispatch({
    type: ACTION_TYPES.EMAIL_IN_USE,
    payload: true,
  });
};
const emailIsValid = (dispatch) => {
  dispatch({
    type: ACTION_TYPES.MISSING_EMAIL,
    payload: false,
  });
  dispatch({
    type: ACTION_TYPES.INVALID_EMAIL,
    payload: false,
  });
  dispatch({
    type: ACTION_TYPES.EMAIL_IN_USE,
    payload: false,
  });
};

export const passwordActions = {
  passwordToShort,
  passwordToLong,
  passwordLengthIsValid,
};

export const passwordMatchActions = {
  passwordIsMatching,
  passwordIsNotMatching,
};

export const usernameActions = {
  usernameToLong,
  missingUsername,
  usernameIsValid,
};

export const emailActions = {
  missingEmail,
  emailIsValid,
  invalidEmail,
  emailInUse,
};
