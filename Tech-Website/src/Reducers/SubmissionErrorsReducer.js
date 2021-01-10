import { ACTION_TYPES } from "../Actions/SubmissionErrorsActions";

export const initialState = {
  shortPassword: false,
  longPassword: false,
  longUsername: false,
  noMatchingPassword: false,
  missingUsername: false,
  missingEmail: false,
  invalidEmail: false,
  emailInUse: false,
};

export const SubmissionErrors = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SHORT_PASSWORD:
      return {
        ...state,
        shortPassword: action.payload,
        longPassword: false,
      };
    case ACTION_TYPES.LONG_PASSWORD:
      return {
        ...state,
        longPassword: action.payload,
        shortPassword: false,
      };
    case ACTION_TYPES.LONG_USERNAME:
      return {
        ...state,
        longUsername: action.payload,
        missingUsername: false,
      };
    case ACTION_TYPES.NO_MATCHING_PASSWORD:
      return {
        ...state,
        noMatchingPassword: action.payload,
      };
    case ACTION_TYPES.MISSING_USERNAME:
      return {
        ...state,
        missingUsername: action.payload,
        longUsername: false,
      };
    case ACTION_TYPES.MISSING_EMAIL:
      return {
        ...state,
        missingEmail: action.payload,
        invalidEmail: false,
        emailInUse: false,
      };
    case ACTION_TYPES.INVALID_EMAIL:
      return {
        ...state,
        invalidEmail: action.payload,
        missingEmail: false,
        emailInUse: false,
      };
    case ACTION_TYPES.EMAIL_IN_USE:
      return {
        ...state,
        emailInUse: action.payload,
        missingEmail: false,
        invalidEmail: false,
      };

    default:
      console.error("no matching action types");
  }
};
export default SubmissionErrors;
