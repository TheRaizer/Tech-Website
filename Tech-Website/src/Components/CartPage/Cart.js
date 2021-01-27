import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as orderActions from "../../Actions/OrderReducerActions";
import * as productActions from "../../Actions/ProductsReducerActions";
import { getPendingOrder, updateOrder } from "../../Actions/OrderActions";
import "./cart.css";

function Cart() {
  const [cart, setCart] = useState([]);
  const submitCart = () => {
    // make sure to update all the orderProducts prices with their products current price
    getPendingOrder().then((order) => {
      updateOrder(order.orderId, { ...order, statusCode: "1" });
    });
  };

  useEffect(() => {
    getPendingOrder(() => setCart([])).then((order) => {
      if (order == null) {
        console.log("cart is empty");
        return;
      } else {
        const cartProds = [];
        order.orderProducts.forEach((ordProd) => {
          cartProds.push(ordProd.product);
        });
        setCart(cartProds);
      }
    });
  }, []);

  return (
    <section>
      <h1 className="header">My Cart</h1>
      <section className="products">
        {cart.length > 0 ? (
          cart.map((product, index) => {
            return (
              <section key={index} style={{ color: "white" }}>
                <p>Product: {product.productName}</p>
                <p>Price: {product.currentPrice}</p>
              </section>
            );
          })
        ) : (
          <div></div>
        )}
      </section>
      {cart.length > 0 ? (
        <button onClick={submitCart}>Submit Cart</button>
      ) : (
        <p style={{ color: "white" }}>Nothing in cart</p>
      )}
    </section>
  );
}
const mapStateToProps = (state) => ({
  products: state.ProductReducer.products,
});

const mapDispatchToProps = {
  createOrder: orderActions.createOrder,
  fetchAllProducts: productActions.fetchAllProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
