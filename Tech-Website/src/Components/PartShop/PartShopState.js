import React, { useEffect, useContext, useState } from "react";
import * as productActions from "../../Actions/ProductsReducerActions";
import * as orderActions from "../../Actions/OrderReducerActions";
import { getProductCategory } from "../../Actions/ProductActions";
import { createOrderProduct } from "../../Actions/OrderProductActions";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { UserIdContext } from "../../Contexts/UserIdContext";
import { getPendingOrder } from "../../Actions/OrderActions";
import PartShop from "./PartShop";
import { v4 as uuidv4 } from "uuid";

function PartShopState(props) {
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
    <PartShop
      state={{ category, confirmationWindow, setConfirmationWindow }}
      props={{
        closeConfirmationWindow,
        expensiveProduct,
        budgetProduct,
        bestProduct,
        AddToCart,
      }}
    />
  );
}

const mapStateToProps = (state) => ({
  products: state.ProductReducer.products,
});

const mapDispatchToProps = {
  fetchProductsByCategoryCode: productActions.fetchProductsByCategoryCode,
  createOrder: orderActions.createOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(PartShopState);
