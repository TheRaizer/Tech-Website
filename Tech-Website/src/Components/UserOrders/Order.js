import { getOrderByUUID, getStatus } from "../../Actions/OrderActions";
import React, { useEffect, useState } from "react";
import "./user-orders.css";

function updateOrderPrices(orderUUID, setOrderInfo) {
  const order = getOrderByUUID(orderUUID);
  order.then((order) => {
    var totalCost = 0;
    order.orderProducts.forEach((x) => (totalCost += x.paidPrice));
    getStatus(order.statusCode).then((status) => {
      setOrderInfo({
        dateOfOrder: order.orderDate,
        status: status,
        deliveryAddress: order.deliveryAddress,
        orderProducts: order.orderProducts,
        totalCost: totalCost,
      });
    });
  });
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
    updateOrderPrices(orderUUID, setOrderInfo);
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
          {orderInfo.status}
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

export default Order;
