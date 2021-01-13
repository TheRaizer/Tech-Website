import React, { useContext } from "react";
import { connect } from "react-redux";
import * as actions from "../../Actions/OrderReducerActions";
import { UserIdContext } from "../../Contexts/UserIdContext";

function OrderPage(props) {
  const { userInfo } = useContext(UserIdContext); //sets a persistent username held in a context

  const SubmitOrder = () => {
    if (!userInfo.hasSignedIn) {
      console.log("not signed in");
      return;
    }

    let order = {
      // this will change in the future
      userId: userInfo.userId,
      productName: "test_name in OrderPage.js",
      orderDate: new Date(),
      progress: 0,
    };

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

export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);
