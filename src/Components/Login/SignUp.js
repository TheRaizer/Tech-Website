import React, { useState } from "react";
import "./Login.css";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <section className="login-form">
      <h1>Sign Up</h1>
      <div>
        <h4>Enter Email: </h4>
        <input type="email" />
      </div>
      <div>
        <h4>Enter Username: </h4>
        <input type="text" maxLength="15" />
      </div>
      <div>
        <h4>Enter Password (maximum 12 characters): </h4>
        <input type={showPassword ? "text" : "password"} className="password" />
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
        <input
          type={showConfirmPassword ? "text" : "password"}
          className="password"
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

      <button type="submit" className="submit">
        Submit
      </button>
    </section>
  );
}

export default SignUp;
