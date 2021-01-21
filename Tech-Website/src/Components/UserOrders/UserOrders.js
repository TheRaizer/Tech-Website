import React, { useContext, useEffect, useState } from "react";
import { connect } from "react-redux";
import { UserIdContext } from "../../Contexts/UserIdContext";
import * as actions from "../../Actions/OrderReducerActions";
import { getOrderByUUID } from "../../Actions/OrderActions";

function UserOrders(props) {
  const { fetchUserOrders, orderUUIDs } = props;
  const { userInfo } = useContext(UserIdContext);
  const [hasLoaded, setHasLoaded] = useState(false);
  useEffect(() => {
    fetchUserOrders(userInfo.userId, () => {
      setHasLoaded(true);
    });
  }, [fetchUserOrders, userInfo.userId]);
  if (!hasLoaded) {
    return <h1>Loading Orders...</h1>;
  }

  if (orderUUIDs == null || orderUUIDs.length <= 0) {
    return <h1>No Orders</h1>;
  } else {
    return orderUUIDs.map((orderUUID) => {
      return <Order key={orderUUID} orderUUID={orderUUID} />;
    });
  }
}

const Order = (props) => {
  const { orderUUID } = props;
  const [orderInfo, setOrderInfo] = useState({
    dateOfOrder: [],
    status: "",
    deliveryAddress: "",
    orderProducts: [],
    totalCost: 0,
  });

  useEffect(() => {
    const order = getOrderByUUID(orderUUID);
    order.then((order) => {
      console.log(order.orderDate);
      var totalCost = 0;
      order.orderProducts.forEach((x) => (totalCost += x.paidPrice));
      setOrderInfo({
        dateOfOrder: order.orderDate,
        status: order.statusCode,
        deliveryAddress: order.deliveryAddress,
        orderProducts: order.orderProducts,
        totalCost: totalCost,
      });
    });
  }, [orderUUID]);
  return (
    <section>
      <p>OrderInfo:</p>
      <p>Order ID: {orderUUID}</p>
      <p>Date of Order: {orderInfo.dateOfOrder}</p>
      <p>Delivery Address: {orderInfo.deliveryAddress}</p>

      {orderInfo.orderProducts.map((orderProduct, index) => {
        return (
          <section key={orderProduct.orderProductId}>
            <p>
              Product {index + 1}: {orderProduct.paidProductName} Cost: $
              {orderProduct.paidPrice}
            </p>
          </section>
        );
      })}

      <p>Total Cost: ${orderInfo.totalCost}</p>
    </section>
  );
};

const mapStateToProps = (state) => ({
  orderUUIDs: state.persistedOrderReducer.orderUUIDs,
});

const mapDispatchToProps = {
  fetchUserOrders: actions.fetchUserOrders,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserOrders);
