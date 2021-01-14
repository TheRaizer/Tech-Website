import React, { useEffect, useState } from "react";
import * as actions from "../../Actions/ProductsReducerActions";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./part-shop.module.css";

//fetch data depending on the useParams() id from redux store and create a props that can be given to the PartShop Component
function PartShop(props) {
  const { category } = useParams();

  useEffect(() => {
    props.fetchProductsByCategory(category);
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const AddToCart = (partInfos, itemType) => {
    //when order hasnt been created create order then add product.
    // to do this we can check the database for any pending submission orders, if there is one we will add this product to that order. if there isn't we will add a pending order.
    //add this product to the order and keep orderStatus as "pending-submission".
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
      <button onClick={AddToCart}>Add To Cart</button>
      <h5>{expensiveProduct?.productDescription ?? "loading..."}</h5>
      <h2>The Budget</h2>
      <button onClick={AddToCart}>Add To Cart</button>
      <h5>{budgetProduct?.productDescription ?? "loading..."}</h5>
      <h2>The Best</h2>
      <button onClick={AddToCart}>Add To Cart</button>
      <h5>{bestProduct?.productDescription ?? "loading..."}</h5>
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.ProductReducer.products,
});

const mapDispatchToProps = {
  fetchProductsByCategory: actions.fetchByCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(PartShop);
