import React, { useContext, useEffect, useState } from "react";
import { createOrderProduct } from "../../Actions/OrderProductActions";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import * as orderActions from "../../Actions/OrderReducerActions";
import * as productActions from "../../Actions/ProductsReducerActions";
import { UserIdContext } from "../../Contexts/UserIdContext";
import "./cart.css";

function Cart(props) {
  const { userInfo, setUserInfo } = useContext(UserIdContext);
  const { fetchAllProducts, products } = props;
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchAllProducts((prods) => {
      userInfo.prodNumsInCart.forEach((prodNum) => {
        setCart((cart) => [
          ...cart,
          prods.find((x) => x.productNumber === prodNum),
        ]);
      });
    });
  }, [fetchAllProducts, userInfo.prodNumsInCart]);
  const submitCart = () => {
    if (userInfo.prodNumsInCart.length === 0) {
      console.log("cart is empty");
      return;
    }

    let order = {
      userId: userInfo.userId,
      orderDate: new Date(),
      statusCode: "1",
      deliveryAddress: "n/a",
      orderUUID: uuidv4(),
    };

    props.createOrder(order, (orderId) => {
      userInfo.prodNumsInCart.forEach((prodNum) => {
        const product = products.find((x) => x.productNumber === prodNum);
        const newOrderProduct = {
          productId: product.productId,
          orderId: orderId,
          paidPrice: product.currentPrice,
          paidProductName: product.productName,
        };
        createOrderProduct(newOrderProduct);
      });
    });

    setUserInfo({ ...userInfo, prodNumsInCart: [] });
  };

  return (
    <section>
      <h1 className="header">My Cart</h1>
      <section className="products">
        {cart.length > 0 ? (
          cart.map((product, index) => {
            return (
              <section key={index}>
                <p>Product: {product.productName}</p>
                <p>Price: {product.price}</p>
              </section>
            );
          })
        ) : (
          <div></div>
        )}
      </section>
      <button onClick={submitCart}>Submit Cart</button>
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
