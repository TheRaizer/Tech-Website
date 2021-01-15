import React, { useState, useContext } from "react";
import { UserIdContext } from "../../Contexts/UserIdContext";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../Actions/UserReducerActions";
import "./login.css";

function SignIn(props) {
  const [showPassword, setShowPassword] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const { userInfo, setUserInfo } = useContext(UserIdContext);

  const submitCredentials = () => {
    props.fetchUserByEmailandPassword(
      credentials.email,
      credentials.password,
      () => {
        setIsValid(false);
      },
      (userId) => {
        console.log(userId);
        setUserInfo({
          ...userInfo,
          userId: userId,
          hasSignedIn: true,
        });
        setCredentials({ email: "", password: "" });
      }
    );
  };

  if (userInfo.hasSignedIn) {
    return (
      <section className="login-form">
        <h1>You have Logged In</h1>
        <Link to="/">Return to Home Page</Link>
      </section>
    );
  } else {
    return (
      <section className="login-form">
        <h1>Sign In</h1>
        <div>
          <p>{isValid ? "" : "credentials are not valid"}</p>
          <h4>Enter Email: </h4>
          <input
            type="email"
            onChange={(evt) =>
              setCredentials({ ...credentials, email: evt.target.value })
            }
            style={{
              backgroundColor: isValid ? "white" : "rgba(255, 65, 65, 0.356)",
            }}
          />
        </div>
        <div>
          <h4>Enter Password: </h4>
          <input
            type={showPassword ? "text" : "password"}
            className="password"
            onChange={(evt) =>
              setCredentials({ ...credentials, password: evt.target.value })
            }
            style={{
              backgroundColor: isValid ? "white" : "rgba(255, 65, 65, 0.356)",
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
        <button type="submit" className="submit" onClick={submitCredentials}>
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
  fetchUserByEmailandPassword: actions.fetchUserByEmailandPassword,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
