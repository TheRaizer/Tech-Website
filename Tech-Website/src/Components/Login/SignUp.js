import React, { useContext, useReducer, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../../Actions/UserReducerActions";
import { isExistingUser } from "../../Actions/UserActions";
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
import { UserIdContext } from "../../Contexts/UserIdContext";
import "./login.css";

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

  const { userInfo, setUserInfo } = useContext(UserIdContext); //sets a persistent username held in a context

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
    props.createUser(info, (createdUserId) => {
      props.fetchUsername(createdUserId);
      setUserInfo({
        ...userInfo,
        userId: createdUserId,
        hasSignedIn: true,
      });
      setInfo({});
    });
  };

  const confirmedPasswordErrorCheck = () => {
    let hasError = false;
    if (confirmedPassword !== info.password) {
      // the confirmed password must be equal to the password
      passwordMatchActions.passwordIsNotMatching(dispatch);
      setConfirmedPassword("");
      hasError = true;
    } else {
      passwordMatchActions.passwordIsMatching(dispatch);
    }
    return hasError;
  };
  const passwordErrorCheck = () => {
    let hasError = false;
    if (info.password.length > 12) {
      // the password must be <= 12 characters
      passwordActions.passwordToLong(dispatch);
      hasError = true;
    } else if (info.password.length < 8) {
      // the password must be >= 5 characters
      passwordActions.passwordToShort(dispatch);
      hasError = true;
    } else {
      passwordActions.passwordLengthIsValid(dispatch);
    }

    return hasError;
  };
  const userNameErrorCheck = () => {
    let hasError = false;
    if (info.username.length === 0) {
      // there must be a username typed in
      usernameActions.missingUsername(dispatch);
      hasError = true;
    } else if (info.username.length > 15) {
      // the username cannot be above 15 characters
      usernameActions.usernameToLong(dispatch);
      hasError = true;
    } else {
      usernameActions.usernameIsValid(dispatch);
    }

    return hasError;
  };
  const emailErrorCheck = () => {
    const re = new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if (info.userEmail.length === 0) {
      // there must be an email typed in
      emailActions.missingEmail(dispatch);
      return true;
    } else if (!re.test(info.userEmail.toLowerCase())) {
      // the email must have the proper format
      emailActions.invalidEmail(dispatch);
      return true;
    }

    const exists = isExistingUser(info.userEmail);
    exists
      .then((userExists) => {
        //call back to run after exists has been obtained from the server
        if (userExists) {
          // the email must not already exist as an account
          emailActions.emailInUse(dispatch);
          return true;
        }
      })
      .catch((err) => console.log(err));

    emailActions.emailIsValid(dispatch);
    return false;
  };

  const handleKeyPress = (evt) => {
    if (evt.key === "Enter") {
      submitUserInfo();
    }
  };

  if (userInfo.hasSignedIn) {
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
          <p>{submissionErrors.invalidEmail ? "email is invalid" : ""}</p>
          <p>
            {submissionErrors.emailInUse
              ? "email is already linked to an account"
              : ""}
          </p>
          <input
            type="email"
            onChange={(evt) =>
              setInfo((info) => ({ ...info, userEmail: evt.target.value }))
            }
            style={{
              backgroundColor:
                submissionErrors.missingEmail ||
                submissionErrors.invalidEmail ||
                submissionErrors.emailInUse
                  ? "rgba(255, 65, 65, 0.356)"
                  : "white",
            }}
            onKeyPress={(evt) => handleKeyPress(evt)}
          />
        </div>
        <div>
          <h4>Enter Username (maximum 15 characters): </h4>
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
            onKeyPress={(evt) => handleKeyPress(evt)}
          />
        </div>
        <div>
          <h4>Enter Password (must be between 8-12 characters): </h4>
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
            onKeyPress={(evt) => handleKeyPress(evt)}
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
            onKeyPress={(evt) => handleKeyPress(evt)}
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
  username: state.persistedUserReducer.username,
});

const mapDispatchToProps = {
  fetchUsername: actions.fetchUsername,
  createUser: actions.createUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
