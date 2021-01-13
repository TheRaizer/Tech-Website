import React, { useContext, useEffect } from "react";
import { connect } from "react-redux";
import { UserIdContext } from "../../Contexts/UserIdContext";
import * as actions from "../../Actions/UserReducerActions";

function UserOrders(props) {
  const { userInfo } = useContext(UserIdContext);
  useEffect(() => {
    props.fetchOrders(userInfo.userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return props.orders.map((order) => {
    return <Order key={order.orderId} orderId={order.orderId} />;
  });
}

const Order = (props) => {
  return <p>{props.orderId}</p>;
};

const mapStateToProps = (state) => ({
  orders: state.persistedUserReducer.orders,
});

const mapDispatchToProps = {
  fetchOrders: actions.fetchUserOrders,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserOrders);
