export const ACTION_TYPES = {
  SHORT_PASSWORD: "SHORT_PASSWORD",
  LONG_PASSWORD: "LONG_PASSWORD",
  LONG_USERNAME: "LONG_USERNAME",
  MISSING_EMAIL: "MISSING_EMAIL",
  MISSING_USERNAME: "MISSING_USERNAME",
  NO_MATCHING_PASSWORD: "NO_MATCHING_PASSWORD",
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

const passwordLengthIsFine = (dispatch) => {
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

const usernameIsFine = (dispatch) => {
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
const emailIsFine = (dispatch) => {
  dispatch({
    type: ACTION_TYPES.MISSING_EMAIL,
    payload: false,
  });
};

export const passwordActions = {
  passwordToShort,
  passwordToLong,
  passwordLengthIsFine,
};

export const passwordMatchActions = {
  passwordIsMatching,
  passwordIsNotMatching,
};

export const usernameActions = {
  usernameToLong,
  missingUsername,
  usernameIsFine,
};

export const emailActions = {
  missingEmail,
  emailIsFine,
};
