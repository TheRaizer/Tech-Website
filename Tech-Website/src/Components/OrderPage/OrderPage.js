import Hashids from "hashids";
import React from "react";
import { useParams } from "react-router-dom";

function OrderPage() {
  const { stringOrderId } = useParams();
  const orderId = parseInt(stringOrderId);
  return <div></div>;
}

export default OrderPage;
