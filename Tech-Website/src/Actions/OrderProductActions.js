import { orderProducts } from "./api";

export const createOrderProduct = async (newOrderProduct) => {
  // function that creates an order product given a newOrderProduct and returns it back
  try {
    const response = await orderProducts().createOrderProduct(newOrderProduct);
    const orderProduct = response.data;
    return orderProduct;
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

    const noContent = response.data;
    return noContent;
  } catch (err) {
    return console.log(err);
  }
};

export const deleteOrderProduct = async (orderProductId, onSuccesful) => {
  try {
    const response = await orderProducts().deleteOrderProduct(orderProductId);
    onSuccesful();

    const deletedOrderProduct = response.data;
    return deletedOrderProduct;
  } catch (err) {
    return console.log(err);
  }
};
