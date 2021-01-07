import React, { useReducer, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../../Actions/UserReducerActions";
import {
  initialState,
  SubmissionErrors,
} from "../../Reducers/SubmissionErrorsReducer";
import {
  passwordActions,
  passwordMatchActions,
  usernameActions,
  emailActions,
} from "../../Actions/SubmissionErrorsActions";
import "./Login.css";

function SignUp(props) {
  const [submissionErrors, dispatch] = useReducer(
    SubmissionErrors,
    initialState
  );
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [info, setInfo] = useState({
    userEmail: "",
    username: "",
    password: "",
  });
  const [hasSubmitted, sethasSubmitted] = useState(false);

  const submitUserInfo = () => {
    let passwordError = passwordErrorCheck();
    let usernameError = userNameErrorCheck();
    let emailError = emailErrorCheck();
    let confirmedPasswordError = confirmedPasswordErrorCheck();
    if (
      passwordError ||
      usernameError ||
      emailError ||
      confirmedPasswordError
    ) {
      return;
    }

    passwordMatchActions.passwordIsMatching(dispatch);
    console.log("post");

    props.createUser(info, (createdUserId) => {
      props.fetchUser(createdUserId);
    });
    sethasSubmitted(true);
  };

  const confirmedPasswordErrorCheck = () => {
    if (confirmedPassword !== info.password) {
      passwordMatchActions.passwordIsNotMatching(dispatch);
      setConfirmedPassword("");

      return true;
    }
  };
  const passwordErrorCheck = () => {
    let hasError = false;
    if (info.password.length > 12) {
      passwordActions.passwordToLong(dispatch);
      hasError = true;
    } else if (info.password.length < 5) {
      passwordActions.passwordToShort(dispatch);
      hasError = true;
    } else {
      passwordActions.passwordLengthIsFine(dispatch);
    }

    return hasError;
  };
  const userNameErrorCheck = () => {
    let hasError = false;
    if (info.username.length === 0) {
      usernameActions.missingUsername(dispatch);
      hasError = true;
    } else if (info.username.length > 15) {
      usernameActions.usernameToLong(dispatch);
      hasError = true;
    } else {
      usernameActions.usernameIsFine(dispatch);
    }

    return hasError;
  };
  const emailErrorCheck = () => {
    let hasError = false;
    if (info.userEmail.length === 0) {
      emailActions.missingEmail(dispatch);
      hasError = true;
    } else {
      emailActions.emailIsFine(dispatch);
    }

    return hasError;
  };

  if (hasSubmitted) {
    return (
      <section className="login-form">
        <h1>You have Created an Account</h1>
        <Link to="/">Return to Home Page</Link>
      </section>
    );
  } else {
    return (
      <section className="login-form">
        <h1>Sign Up</h1>
        <div>
          <h4>Enter Email: </h4>
          <p>{submissionErrors.missingEmail ? "email is missing" : ""}</p>
          <input
            type="email"
            onChange={(evt) =>
              setInfo((info) => ({ ...info, userEmail: evt.target.value }))
            }
            style={{
              backgroundColor: submissionErrors.missingEmail
                ? "rgba(255, 65, 65, 0.356)"
                : "white",
            }}
          />
        </div>
        <div>
          <h4>Enter Username (max 15): </h4>
          <p>{submissionErrors.longUsername ? "username is too long" : ""}</p>
          <p>{submissionErrors.missingUsername ? "username is missing" : ""}</p>
          <input
            type="text"
            onChange={(evt) =>
              setInfo((info) => ({ ...info, username: evt.target.value }))
            }
            style={{
              backgroundColor:
                submissionErrors.longUsername ||
                submissionErrors.missingUsername
                  ? "rgba(255, 65, 65, 0.356)"
                  : "white",
            }}
          />
        </div>
        <div>
          <h4>Enter Password (min 5, max 12): </h4>
          <p>{submissionErrors.longPassword ? "password is to long" : ""}</p>
          <p>{submissionErrors.shortPassword ? "password is to short" : ""}</p>
          <input
            type={showPassword ? "text" : "password"}
            className="password"
            onChange={(evt) =>
              setInfo((info) => ({ ...info, password: evt.target.value }))
            }
            style={{
              backgroundColor:
                submissionErrors.longPassword || submissionErrors.shortPassword
                  ? "rgba(255, 65, 65, 0.356)"
                  : "white",
            }}
          />
          <button
            className="show-btn"
            type="submit"
            onClick={() => {
              setShowPassword((showPassword) => !showPassword);
            }}
          >
            Show
          </button>
        </div>
        <div>
          <h4>Confirm Password: </h4>
          <p>{submissionErrors.noMatchingPassword ? "does not match" : ""}</p>
          <input
            type={showConfirmPassword ? "text" : "password"}
            value={confirmedPassword}
            className="password"
            onChange={(evt) => {
              setConfirmedPassword(evt.target.value);
            }}
            style={{
              backgroundColor: submissionErrors.noMatchingPassword
                ? "rgba(255, 65, 65, 0.356)"
                : "white",
            }}
          />
          <button
            className="show-btn"
            type="submit"
            onClick={() => {
              setShowConfirmPassword(
                (showConfirmPassword) => !showConfirmPassword
              );
            }}
          >
            Show
          </button>
        </div>

        <button type="submit" className="submit" onClick={submitUserInfo}>
          Submit
        </button>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.persistedUserReducer.currentUser,
});

const mapDispatchToProps = {
  fetchAllUsers: actions.fetchAllUsers,
  fetchUser: actions.fetchUser,
  createUser: actions.createUser,
  deleteUser: actions.deleteUser,
  updateUser: actions.updateUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
