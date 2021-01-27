import React, { useContext, useEffect, useState } from "react";
import { connect } from "react-redux";
import { UserIdContext } from "../../Contexts/UserIdContext";
import * as actions from "../../Actions/OrderReducerActions";
import { getOrderByUUID } from "../../Actions/OrderActions";
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
        <h1 className="header">Orders</h1>
        <section id="orders-section">
          {orderUUIDs.map((orderUUID) => {
            return <Order key={orderUUID} orderUUID={orderUUID} />;
          })}
        </section>
      </section>
    );
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
    <section className="order">
      <h3> OrderInfo:</h3>
      <div>
        <p>
          <b>Order ID:</b> {orderUUID}
        </p>
        <p>
          <b>Date of Order: </b>
          {orderInfo.dateOfOrder}
        </p>
        <p>
          <b>Delivery Address: </b>
          {orderInfo.deliveryAddress}
        </p>
        <p>
          <b>Status Code: </b>
          {orderInfo.statusCode}
        </p>
      </div>
      <div>
        <h3>Products</h3>
        {orderInfo.orderProducts.map((orderProduct, index) => {
          return (
            <section key={orderProduct.orderProductId}>
              <p>
                <b>Product {index + 1}:</b> {orderProduct.paidProductName}
              </p>
              <p>
                <b>Cost: </b>${orderProduct.paidPrice.toFixed(2)}
              </p>
            </section>
          );
        })}
      </div>
      <p id="total-cost">
        <b>Total Cost: </b>${orderInfo.totalCost.toFixed(2)}
      </p>
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
