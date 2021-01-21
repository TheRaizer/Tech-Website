import React, { useContext } from "react";
import { connect } from "react-redux";
import * as actions from "../../Actions/OrderReducerActions";
import { UserIdContext } from "../../Contexts/UserIdContext";

function CheckOut(props) {
  const { userInfo } = useContext(UserIdContext); //sets a persistent username held in a context

  const SubmitOrder = () => {
    if (!userInfo.hasSignedIn) {
      console.log("not signed in");
      return;
    }

    let order = {
      // this will change in the future it is currently a TEST
      userId: userInfo.userId,
      OrderDate: new Date(),
      Status: "pending-submission",
      DeliveryAddress: "avenue",
      OrderNumber: 2235,
    };
    console.log(userInfo.userId);
    props.createOrder(order);
  };
  return (
    <div>
      <h1>Check Out</h1>
      <button type="submit" onClick={SubmitOrder}>
        Submit Order
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  username: state.persistedUserReducer.username,
});

const mapDispatchToProps = {
  createOrder: actions.createOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);
