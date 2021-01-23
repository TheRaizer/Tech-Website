import React, { useContext, useEffect } from "react";
import { createOrderProduct } from "../../Actions/OrderProductActions";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import * as orderActions from "../../Actions/OrderReducerActions";
import * as productActions from "../../Actions/ProductsReducerActions";
import { UserIdContext } from "../../Contexts/UserIdContext";

function Cart(props) {
  const { userInfo, setUserInfo } = useContext(UserIdContext);
  const { fetchAllProducts, products } = props;
  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

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

    setUserInfo({ ...userInfo, productsInCart: [] });
  };

  return (
    <section>
      <h1>My Cart</h1>
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
