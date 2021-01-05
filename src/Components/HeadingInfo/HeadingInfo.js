import React from "react";
import { Link } from "react-router-dom";
import "./HeadingInfo.css";

function HeadingInfo() {
  return (
    <header className="header">
      <h1>Kronis</h1>
      <section className="login-options">
        <Link to="/sign-in">Sign In</Link>
        <Link to="/sign-up">Sign Up</Link>
      </section>
    </header>
  );
}

export default HeadingInfo;
