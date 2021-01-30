import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styles from "./heading-info.module.css";
import "./login-options.css";

function HeadingInfo(props) {
  if (props.username !== "") {
    return (
      <header className="header">
        <h1 className={styles.heading}>Kronis</h1>
        <h4 className={styles.username}>Username: {props.username}</h4>
        <section className="login-options">
          <Link to="/cart">Cart</Link>
          <Link to="/orders">Order Statuses</Link>
        </section>
      </header>
    );
  } else {
    return (
      <header className="header">
        <h1 className={styles.heading}>Kronis</h1>
        <section className="login-options">
          <Link to="/sign-in">Sign In</Link>
          <Link to="/sign-up">Sign Up</Link>
        </section>
      </header>
    );
  }
}
const mapStateToProps = (state) => ({
  username: state.persistedUserReducer.username,
});

export default connect(mapStateToProps)(HeadingInfo);
