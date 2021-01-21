import React, { useEffect, useContext, useState } from "react";
import * as productActions from "../../Actions/ProductsReducerActions";
import * as orderActions from "../../Actions/OrderReducerActions";
import { getPendingOrder } from "../../Actions/OrderActions";
import { createOrderProduct } from "../../Actions/OrderProductActions";
import { getProductCategory } from "../../Actions/ProductActions";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { UserIdContext } from "../../Contexts/UserIdContext";
import { v4 as uuidv4 } from "uuid";
import styles from "./part-shop.module.css";

//fetch data depending on the useParams() id from redux store and create a props that can be given to the PartShop Component
function PartShop(props) {
  const { categoryCode } = useParams();
  const [category, setCategory] = useState("...loading");

  useEffect(() => {
    props.fetchProductsByCategoryCode(categoryCode);
    getProductCategory(categoryCode).then((ctgry) => setCategory(ctgry));
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const expensiveProduct = props.products.find(
    (x) => x.productValueTypeCode === "2"
  );
  const budgetProduct = props.products.find(
    (x) => x.productValueTypeCode === "0"
  );
  const bestProduct = props.products.find(
    (x) => x.productValueTypeCode === "1"
  );

  return (
    <div>
      <section className="header">
        <h1 className={styles.heading}>
          The Expensive, Budget, and Best of {category}
        </h1>
      </section>
      <h2>The Expensive</h2>
      <Product product={expensiveProduct} {...props} />
      <h2>The Budget</h2>
      <Product product={budgetProduct} {...props} />
      <h2>The Best</h2>
      <Product product={bestProduct} {...props} />
    </div>
  );
}

const Product = (props) => {
  const { userInfo } = useContext(UserIdContext); //sets a persistent username held in a context

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
          statusCode: "0",
          deliveryAddress: "n/a",
          orderUUID: uuidv4(),
        };
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

  return (
    <section>
      <section>
        {userInfo.hasSignedIn ? (
          props.product?.stock > 0 ? (
            <button onClick={() => AddToCart(props.product)}>
              Add To Cart
            </button>
          ) : (
            <p>out of stock</p>
          )
        ) : (
          <p>Cannot Add to cart if not signed in</p>
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
