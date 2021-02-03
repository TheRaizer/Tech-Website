import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

export default function SignUp({ state, props }) {
  const {
    submissionErrors,
    showPassword,
    setInfo,
    setShowPassword,
    showConfirmPassword,
    confirmedPassword,
    setConfirmedPassword,
    setShowConfirmPassword,
  } = state;

  const { hasSignedIn, handleKeyPress, submitUserInfo } = props;

  if (hasSignedIn) {
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
              setInfo((info) => ({
                ...info,
                userEmail: evt.target.value,
              }))
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
              backgroundColor: state.submissionErrors.noMatchingPassword
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
