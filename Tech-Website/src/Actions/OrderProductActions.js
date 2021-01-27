import { orderProducts } from "./api";

export const createOrderProduct = async (newOrderProduct) => {
  // function that creates an order product given a newOrderProduct and returns it back
  try {
    const response = await orderProducts().createOrderProduct(newOrderProduct);
    return response.data;
  } catch (err) {
    return console.log(err);
  }
};

export const updateOrderProduct = async (orderProductId, updatedRecord) => {
  try {
    const response = await orderProducts().updateOrderProduct(
      orderProductId,
      updatedRecord
    );
    return response.data;
  } catch (err) {
    return console.log(err);
  }
};
