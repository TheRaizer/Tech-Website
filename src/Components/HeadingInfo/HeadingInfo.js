import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../Actions/UserReducerActions";
import "./HeadingInfo.css";

function HeadingInfo(props) {
  console.log(props.currentUser); //empties on reload
  if (Object.keys(props.currentUser).length !== 0) {
    return (
      <header className="header">
        <h1>Kronis</h1>
        <h4>{props.currentUser.username}</h4>
      </header>
    );
  } else {
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
}
const mapStateToProps = (state) => ({
  currentUser: state.persistedUserReducer.currentUser,
});

const mapDispatchToProps = {
  fetchAllUsers: actions.fetchAllUsers,
  fetchUser: actions.fetchUser,
  createUser: actions.createUser,
  deleteUser: actions.deleteUser,
  updateUser: actions.updateUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeadingInfo);
