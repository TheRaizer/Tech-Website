import React, { useEffect, useState, useContext } from "react";
import { connect } from "react-redux";
import * as orderActions from "../../Actions/OrderReducerActions";
import * as productActions from "../../Actions/ProductsReducerActions";
import { getPendingOrder, updateOrder } from "../../Actions/OrderActions";
import {
  updateOrderProduct,
  deleteOrderProduct,
} from "../../Actions/OrderProductActions";
import { UserIdContext } from "../../Contexts/UserIdContext";
import { getProduct } from "../../Actions/ProductActions";
import "./cart.css";

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

function Cart() {
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
function CartProduct(props) {
  const { ordProd, removeOrdProd } = props;

  return (
    <section id="cart-product">
      <p>
        <b>Product:</b> {ordProd.product.productName}
      </p>
      <p>
        <b>Price:</b> ${ordProd.product.currentPrice.toFixed(2)}
      </p>
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
