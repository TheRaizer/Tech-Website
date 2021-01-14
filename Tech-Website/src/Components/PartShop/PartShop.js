import React, { useEffect, useContext } from "react";
import * as productActions from "../../Actions/ProductsReducerActions";
import * as orderActions from "../../Actions/OrderReducerActions";
import { getPendingOrder } from "../../Actions/OrderActions";
import { createOrderProduct } from "../../Actions/OrderProductActions";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { UserIdContext } from "../../Contexts/UserIdContext";
import { v4 as uuidv4 } from "uuid";
import styles from "./part-shop.module.css";

//fetch data depending on the useParams() id from redux store and create a props that can be given to the PartShop Component
function PartShop(props) {
  const { category } = useParams();
  const { userInfo } = useContext(UserIdContext); //sets a persistent username held in a context

  useEffect(() => {
    props.fetchProductsByCategory(category);
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const AddToCart = (product) => {
    const exists = getPendingOrder();
    exists.then((pendingOrder) => {
      if (pendingOrder.orderId != null) {
        console.log("pending order exists");
        const newOrderProduct = {
          productId: product.productId,
          orderId: pendingOrder.orderId,
          paidPrice: product.currentPrice,
          paidProductName: product.productName,
        };

        createOrderProduct(newOrderProduct);
      } else {
        console.log("No pending order so creating one");
        let order = {
          userId: userInfo.userId,
          orderDate: new Date(),
          status: "pending-submission",
          deliveryAddress: "n/a",
          orderUUID: uuidv4(),
        };

        console.log(order);
        props.createOrder(order, (orderId) => {
          const newOrderProduct = {
            productId: product.productId,
            orderId: orderId,
            paidPrice: product.currentPrice,
            paidProductName: product.productName,
          };

          createOrderProduct(newOrderProduct);
        });
      }
    });
  };
  const expensiveProduct = props.products.find(
    (x) => x.productValueType === "EXPENSIVE"
  );
  const budgetProduct = props.products.find(
    (x) => x.productValueType === "BUDGET"
  );
  const bestProduct = props.products.find((x) => x.productValueType === "BEST");

  return (
    <div>
      <section className="header">
        <h1 className={styles.heading}>
          The Expensive, Budget, and Best of {category}
        </h1>
      </section>
      <h2>The Expensive</h2>
      <button onClick={() => AddToCart(expensiveProduct)}>Add To Cart</button>
      <h5>{expensiveProduct?.productDescription ?? "loading..."}</h5>
      <h2>The Budget</h2>
      <button onClick={() => AddToCart(budgetProduct)}>Add To Cart</button>
      <h5>{budgetProduct?.productDescription ?? "loading..."}</h5>
      <h2>The Best</h2>
      <button onClick={() => AddToCart(bestProduct)}>Add To Cart</button>
      <h5>{bestProduct?.productDescription ?? "loading..."}</h5>
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.ProductReducer.products,
});

const mapDispatchToProps = {
  fetchProductsByCategory: productActions.fetchByCategory,
  createOrder: orderActions.createOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(PartShop);
