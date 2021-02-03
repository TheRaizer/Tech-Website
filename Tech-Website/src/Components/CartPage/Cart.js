import React from "react";
import CartProduct from "./CartProduct";
import "./cart.css";

export default function Cart({ state, props }) {
  const { cart } = state;
  const { removeOrdProd, submitCart } = props;

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
        <button onClick={submitCart} id="submit-cart">
          Submit Cart
        </button>
      ) : (
        <p id="empty-cart">Cart is Empty</p>
      )}
    </section>
  );
}
