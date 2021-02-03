import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

export default function SignIn({ state, props }) {
  const {
    userInfo,
    showPassword,
    isValid,
    setShowPassword,
    credentials,
    setCredentials,
  } = state;

  const { handleKeyPress, submitCredentials } = props;
  // if they have signed in then don't allow them to try to sign in again
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
            onKeyPress={(evt) => handleKeyPress(evt)}
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
        <button type="submit" className="submit" onClick={submitCredentials}>
          Submit
        </button>
      </section>
    );
  }
}
