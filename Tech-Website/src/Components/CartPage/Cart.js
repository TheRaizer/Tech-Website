import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as orderActions from "../../Actions/OrderReducerActions";
import * as productActions from "../../Actions/ProductsReducerActions";
import { getPendingOrder, updateOrder } from "../../Actions/OrderActions";
import {
  updateOrderProduct,
  deleteOrderProduct,
} from "../../Actions/OrderProductActions";
import { getProduct } from "../../Actions/ProductActions";
import "./cart.css";

function Cart() {
  const [cart, setCart] = useState([]);

  const removeOrdProd = (ordProd) => {
    const newCart = cart.filter(
      (x) => x.orderProductId !== ordProd.orderProductId
    );

    deleteOrderProduct(ordProd.orderProductId, () => setCart(newCart));
  };

  const submitCart = () => {
    // make sure to update all the orderProducts prices with their products current price
    getPendingOrder().then((order) => {
      updateOrder(order.orderId, { ...order, statusCode: "1" });
    });
    setCart([]);
  };

  useEffect(() => {
    getPendingOrder(() => setCart([])).then((order) => {
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
              console.log("update price");
              updatedOrdProd.paidPrice = product.currentPrice;
              updateOrderProduct(ordProd.orderProductId, updatedOrdProd);
            }
          });
        });
        setCart(cartProds);
      }
    });
  }, []);

  return (
    <section>
      <h1 className="centered-heading">My Cart</h1>
      <section className="products">
        {cart.length > 0 ? (
          cart.map((ordProd, index) => (
            <CartProduct
              key={index}
              ordProd={ordProd}
              removeOrdProd={removeOrdProd}
            />
          ))
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
function CartProduct(props) {
  const { ordProd, removeOrdProd } = props;

  return (
    <section style={{ color: "white" }} id="cart-product">
      <p>Product: {ordProd.product.productName}</p>
      <p>Price: ${ordProd.product.currentPrice.toFixed(2)}</p>
      <button onClick={() => removeOrdProd(ordProd)}>Remove from Cart</button>
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
