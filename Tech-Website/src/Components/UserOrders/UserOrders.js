import React, { useContext, useEffect, useState } from "react";
import { connect } from "react-redux";
import { UserIdContext } from "../../Contexts/UserIdContext";
import * as actions from "../../Actions/OrderReducerActions";
import Order from "./Order";
import "./user-orders.css";

function UserOrders(props) {
  const { fetchUserOrders, orderUUIDs } = props;
  const { userInfo } = useContext(UserIdContext);
  const [hasLoaded, setHasLoaded] = useState(false);
  useEffect(() => {
    fetchUserOrders(userInfo.userId, () => setHasLoaded(true));
  }, [fetchUserOrders, userInfo.userId]);

  if (!hasLoaded) {
    return <h1>Loading Orders...</h1>;
  }

  if (orderUUIDs == null || orderUUIDs.length <= 0) {
    return <h1>No Orders</h1>;
  } else {
    return (
      <section>
        <h1 className="centered-heading">Orders</h1>
        <section id="orders-section">
          {orderUUIDs.map((orderUUID) => {
            return <Order key={orderUUID} orderUUID={orderUUID} />;
          })}
        </section>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  orderUUIDs: state.persistedOrderReducer.orderUUIDs,
});

const mapDispatchToProps = {
  fetchUserOrders: actions.fetchUserOrders,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserOrders);
