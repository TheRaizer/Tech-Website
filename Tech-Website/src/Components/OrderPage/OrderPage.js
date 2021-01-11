import React, { useContext } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import * as actions from "../../Actions/UserReducerActions";
import { UserIdContext } from "../../Contexts/UserIdContext";

function OrderPage(props) {
  const { stringOrderId } = useParams();
  const { userInfo } = useContext(UserIdContext); //sets a persistent username held in a context
  const orderId = parseInt(stringOrderId);

  const SubmitOrder = () => {
    if (userInfo.hasSignedIn === false) {
      console.log("not signed in");
      return;
    }

    let order = {
      orderId: orderId,
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
