import React, { useContext } from "react";
import { connect } from "react-redux";
import * as actions from "../../Actions/UserReducerActions";
import { UserIdContext } from "../../Contexts/UserIdContext";

function OrderPage(props) {
  const { userInfo } = useContext(UserIdContext); //sets a persistent username held in a context

  const SubmitOrder = () => {
    if (!userInfo.hasSignedIn) {
      console.log("not signed in");
      return;
    }

    let order = {
      userId: userInfo.userId,
      productName: "test_name in OrderPage.js",
      orderDate: new Date(),
    };

    props.createOrder(order);
  };
  return (
    <div>
      <button type="submit" onClick={SubmitOrder}>
        Order
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
