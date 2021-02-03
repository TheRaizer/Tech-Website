import React, { useEffect, useState, useContext } from "react";
import { getPendingOrder, updateOrder } from "../../Actions/OrderActions";
import {
  updateOrderProduct,
  deleteOrderProduct,
} from "../../Actions/OrderProductActions";
import { UserIdContext } from "../../Contexts/UserIdContext";
import { getProduct } from "../../Actions/ProductActions";
import Cart from "./Cart";

const initCart = (userInfo, setCart) => {
  getPendingOrder(userInfo.userId, () => setCart([])).then((order) => {
    if (order == null) {
      console.log("cart is empty");
      return;
    } else {
      const cartProds = [];
      order.orderProducts.forEach((ordProd) => {
        cartProds.push(ordProd);

        // updates the prices of the products in the order.
        var updatedOrdProd = ordProd;
        getProduct(ordProd.productId).then((product) => {
          if (updatedOrdProd.paidPrice !== product.currentPrice) {
            updatedOrdProd.paidPrice = product.currentPrice;
            updateOrderProduct(ordProd.orderProductId, updatedOrdProd);
          }
        });
      });
      setCart(cartProds);
    }
  });
};

export default function CartState() {
  const [cart, setCart] = useState([]);
  const { userInfo } = useContext(UserIdContext); //sets a persistent username held in a context

  const removeOrdProd = (ordProd) => {
    const newCart = cart.filter(
      (x) => x.orderProductId !== ordProd.orderProductId
    );
    deleteOrderProduct(ordProd.orderProductId, () => setCart(newCart));
  };

  const submitCart = () => {
    // make sure to update all the orderProducts prices with their products current price
    getPendingOrder(userInfo.userId).then((order) => {
      updateOrder(order.orderId, { ...order, statusCode: "1" });
    });
    setCart([]);
  };

  useEffect(() => {
    initCart(userInfo, setCart);
  }, [userInfo, userInfo.userId]);

  return <Cart state={{ cart }} props={{ removeOrdProd, submitCart }} />;
}
