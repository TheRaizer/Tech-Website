import React, { useContext, useReducer, useState } from "react";
import { connect } from "react-redux";
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
import SignUp from "./SignUp";

function SignUpState(props) {
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

  return (
    <SignUp
      state={{
        submissionErrors,
        showPassword,
        setInfo,
        setShowPassword,
        showConfirmPassword,
        confirmedPassword,
        setConfirmedPassword,
        setShowConfirmPassword,
      }}
      props={{
        hasSignedIn: userInfo.hasSignedIn,
        handleKeyPress,
        submitUserInfo,
      }}
    />
  );
}

const mapStateToProps = (state) => ({
  username: state.persistedUserReducer.username,
});

const mapDispatchToProps = {
  fetchUsername: actions.fetchUsername,
  createUser: actions.createUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpState);
