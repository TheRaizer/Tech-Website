import React, { useState, useContext } from "react";
import { UserIdContext } from "../../Contexts/UserIdContext";
import { connect } from "react-redux";
import SignIn from "./SignIn";
import * as actions from "../../Actions/UserReducerActions";

function SignInState(props) {
  const [showPassword, setShowPassword] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const { userInfo, setUserInfo } = useContext(UserIdContext);

  const submitCredentials = () => {
    // try to fetch a user using the inputted email and password
    props.fetchUserByEmailandPassword(
      credentials.email,
      credentials.password,
      // failed callback will set isValid to false
      () => {
        setIsValid(false);
      },
      // succesful callBack will allow us to intialize the current users info
      (userId) => {
        setUserInfo({
          ...userInfo,
          userId: userId,
          hasSignedIn: true,
        });

        // empty the credentials
        setCredentials({ email: "", password: "" });
      }
    );
  };

  const handleKeyPress = (evt) => {
    if (evt.key === "Enter") {
      submitCredentials();
    }
  };

  return (
    <SignIn
      state={{
        userInfo,
        showPassword,
        isValid,
        setShowPassword,
        credentials,
        setCredentials,
      }}
      props={{ handleKeyPress, submitCredentials }}
    />
  );
}

const mapStateToProps = (state) => ({
  // map the username from the persistent state of the UserReducer and make it available in props
  username: state.persistedUserReducer.username,
});

const mapDispatchToProps = {
  // map the fetchUserByEmail dispatch function to the props
  fetchUserByEmailandPassword: actions.fetchUserByEmailandPassword,
};

// connect the mappings to the SignIn component to make it accessible in its props
export default connect(mapStateToProps, mapDispatchToProps)(SignInState);
