import React, { useEffect, useContext, useState } from "react";
import * as productActions from "../../Actions/ProductsReducerActions";
import * as orderActions from "../../Actions/OrderReducerActions";
import { getProductCategory } from "../../Actions/ProductActions";
import { createOrderProduct } from "../../Actions/OrderProductActions";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { UserIdContext } from "../../Contexts/UserIdContext";
import { getPendingOrder } from "../../Actions/OrderActions";
import { v4 as uuidv4 } from "uuid";
import styles from "./part-shop.module.css";

//fetch data depending on the useParams() id from redux store and create a props that can be given to the PartShop Component
function PartShop(props) {
  const { userInfo } = useContext(UserIdContext); //sets a persistent username held in a context
  const { fetchProductsByCategoryCode, products } = props;
  const { categoryCode } = useParams();
  const [category, setCategory] = useState("...loading");
  const [confirmationWindow, setConfirmationWindow] = useState({
    open: false,
    product: {},
  });

  useEffect(() => {
    fetchProductsByCategoryCode(categoryCode);
    getProductCategory(categoryCode).then((ctgry) => setCategory(ctgry));
    window.scrollTo(0, 0);
  }, [categoryCode, fetchProductsByCategoryCode]);

  const expensiveProduct = products.find((x) => x.productValueTypeCode === "2");
  const budgetProduct = products.find((x) => x.productValueTypeCode === "0");
  const bestProduct = products.find((x) => x.productValueTypeCode === "1");

  const onNotFound = (product) => {
    console.log("not found");
    const order = {
      userId: userInfo.userId,
      orderDate: new Date(),
      statusCode: "0",
      deliveryAddress: "n/a",
      orderUUID: uuidv4(),
    };
    props.createOrder(order, (orderId) => addOrderProduct(orderId, product));
  };

  const addOrderProduct = (orderId, product) => {
    const orderProduct = {
      productId: product.productId,
      orderId: orderId,
      paidPrice: product.currentPrice,
      paidProductName: product.productName,
    };
    createOrderProduct(orderProduct);
  };

  const AddToCart = (product) => {
    getPendingOrder(userInfo.userId, () => onNotFound(product)).then(
      (order) => {
        if (order == null) {
          return;
        }
        addOrderProduct(order.orderId, product);
        console.log("create orderProduct");
      }
    );
  };

  const closeConfirmationWindow = () => {
    document.body.style.overflow = "auto";
    setConfirmationWindow({ open: false, product: {} });
  };

  return (
    <div>
      <section className="header">
        <h1 className={styles.heading}>
          The Expensive, Budget, and Best of {category ?? "...loading"}
        </h1>
      </section>
      {confirmationWindow.open ? (
        <section>
          <div className={styles.darkenedLayer}></div>
          <div className={styles.confirmationWindow}>
            <h3>Do you wish to purchase a</h3>
            <h3>{confirmationWindow.product.productName}</h3>
            <button
              onClick={() => {
                closeConfirmationWindow();
                AddToCart(confirmationWindow.product);
              }}
            >
              Yes
            </button>
            <button onClick={closeConfirmationWindow}>No</button>
          </div>
        </section>
      ) : (
        <div></div>
      )}
      <h2>The Expensive</h2>
      <Product
        product={expensiveProduct}
        setConfirmationWindow={setConfirmationWindow}
        {...props}
      />
      <h2>The Budget</h2>
      <Product
        product={budgetProduct}
        setConfirmationWindow={setConfirmationWindow}
        {...props}
      />
      <h2>The Best</h2>
      <Product
        product={bestProduct}
        setConfirmationWindow={setConfirmationWindow}
        {...props}
      />
    </div>
  );
}

const Product = (props) => {
  const { userInfo } = useContext(UserIdContext);

  return (
    <section>
      <section>
        {userInfo.hasSignedIn ? (
          props.product?.stock > 0 ? (
            <div
              onClick={() => {
                props.setConfirmationWindow({
                  open: true,
                  product: props.product,
                });
                document.body.style.overflow = "hidden";
              }}
              className={styles.addToCart}
            >
              Add To Cart
            </div>
          ) : (
            <div className={styles.addToCart}>out of stock</div>
          )
        ) : (
          <div className={styles.addToCart}>
            Cannot Add to cart if not signed in
          </div>
        )}
      </section>
      <h5>{props.product?.productDescription ?? "loading..."}</h5>
    </section>
  );
};

const mapStateToProps = (state) => ({
  products: state.ProductReducer.products,
});

const mapDispatchToProps = {
  fetchProductsByCategoryCode: productActions.fetchProductsByCategoryCode,
  createOrder: orderActions.createOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(PartShop);
