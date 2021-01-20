import React, { useContext, useEffect, useState } from "react";
import { connect } from "react-redux";
import { UserIdContext } from "../../Contexts/UserIdContext";
import * as actions from "../../Actions/OrderReducerActions";

function UserOrders(props) {
  const { userInfo } = useContext(UserIdContext);
  const [hasLoaded, setHasLoaded] = useState(false);
  useEffect(() => {
    props.fetchUserOrders(userInfo.userId, () => {
      setHasLoaded(true);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (!hasLoaded) {
    return <h1>Loading Orders...</h1>;
  }

  if (props.orderUUIDs == null || props.orderUUIDs.length <= 0) {
    return <h1>No Orders</h1>;
  } else {
    return props.orderUUIDs.map((orderUUID) => {
      return <Order key={orderUUID} orderUUID={orderUUID} />;
    });
  }
}

const Order = (props) => {
  return <p>{props.orderUUID}</p>;
};

const mapStateToProps = (state) => ({
  orderUUIDs: state.persistedOrderReducer.orderUUIDs,
});

const mapDispatchToProps = {
  fetchUserOrders: actions.fetchUserOrders,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserOrders);
