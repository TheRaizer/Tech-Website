import React, { useContext, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import LoggedInContext from "../../Contexts/LoggedInContext";
import "./Login.css";
import * as actions from "../../Actions/UserReducerActions";

function SignUp(props) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [info, setInfo] = useState({
    userEmail: "",
    username: "",
    password: "",
  });
  const [hasSubmitted, sethasSubmitted] = useState(false);
  const { loggedInInfo, setLoggedInInfo } = useContext(LoggedInContext);

  useEffect(() => {
    setLoggedInInfo({
      loggedIn: true,
      user: {
        ...loggedInInfo.user,
        userEmail: props.fetchedUser.userEmail,
        username: props.fetchedUser.username,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.fetchedUser]);

  const submitUserInfo = () => {
    props.createUser(info, (createdUserId) => {
      props.fetchUser(createdUserId);
      setLoggedInInfo({
        ...loggedInInfo,
        user: { ...loggedInInfo.user, userId: createdUserId },
      });
    });
    sethasSubmitted(true);
  };
  if (hasSubmitted) {
    return (
      <section className="login-form">
        <h1>You have Created an Account</h1>
        <Link to="/">Return to Home Page</Link>
      </section>
    );
  } else if (!hasSubmitted) {
    return (
      <section className="login-form">
        <h1>Sign Up</h1>
        <div>
          <h4>Enter Email: </h4>
          <input
            type="email"
            onChange={(evt) =>
              setInfo((info) => ({ ...info, userEmail: evt.target.value }))
            }
          />
        </div>
        <div>
          <h4>Enter Username: </h4>
          <input
            type="text"
            maxLength="15"
            onChange={(evt) =>
              setInfo((info) => ({ ...info, username: evt.target.value }))
            }
          />
        </div>
        <div>
          <h4>Enter Password (maximum 12 characters): </h4>
          <input
            type={showPassword ? "text" : "password"}
            className="password"
            onChange={(evt) =>
              setInfo((info) => ({ ...info, password: evt.target.value }))
            }
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
          <p>
            {confirmedPassword === info.password
              ? "matches password"
              : "does not match password"}
          </p>
          <input
            type={showConfirmPassword ? "text" : "password"}
            className="password"
            onChange={(evt) => setConfirmedPassword(evt.target.value)}
            style={{
              backgroundColor:
                confirmedPassword === info.password
                  ? "white"
                  : "rgba(255, 0, 0, 0.219)",
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
  users: state.UserReducer.users,
  fetchedUser: state.UserReducer.fetchedUser,
});

const mapDispatchToProps = {
  fetchAllUsers: actions.fetchAllUsers,
  fetchUser: actions.fetchUser,
  createUser: actions.createUser,
  deleteUser: actions.deleteUser,
  updateUser: actions.updateUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
