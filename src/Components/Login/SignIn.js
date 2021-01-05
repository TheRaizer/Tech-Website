import React, { useState } from "react";
import "./Login.css";

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="login-form">
      <h1>Sign In</h1>
      <div>
        <h4>Enter Email: </h4>
        <input type="email" />
      </div>
      <div>
        <h4>Enter Password: </h4>
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
      <button type="submit" className="submit">
        Submit
      </button>
    </section>
  );
}

export default SignIn;
