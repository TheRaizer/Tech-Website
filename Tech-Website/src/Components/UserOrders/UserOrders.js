import React, { useContext, useEffect } from "react";
import { connect } from "react-redux";
import { UserIdContext } from "../../Contexts/UserIdContext";
import * as actions from "../../Actions/OrderReducerActions";

function UserOrders(props) {
  const { userInfo } = useContext(UserIdContext);
  useEffect(() => {
    props.fetchOrders(userInfo.userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (props.orderIds == null) {
    return <h1>No Orders</h1>;
  } else if (props.orderIds.length <= 0) {
    return <h1>No Orders</h1>;
  } else {
    return props.orderIds.map((orderId) => {
      return <Order key={orderId} orderId={orderId} />;
    });
  }
}

const Order = (props) => {
  return <p>{props.orderId}</p>;
};

const mapStateToProps = (state) => ({
  orderIds: state.persistedUserReducer.orders,
});

const mapDispatchToProps = {
  fetchOrders: actions.fetchUserOrders,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserOrders);
