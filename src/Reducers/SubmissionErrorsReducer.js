import { ACTION_TYPES } from "../Actions/SubmissionErrorsActions";

export const initialState = {
  shortPassword: false,
  longPassword: false,
  longUsername: false,
  noMatchingPassword: false,
  missingUsername: false,
  missingEmail: false,
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
      };
    default:
      console.error("no matching action types");
  }
};

export default SubmissionErrors;
