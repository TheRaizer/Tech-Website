import { orderProducts } from "./api";

export const createOrderProduct = async (newOrderProduct) => {
  try {
    const response = await orderProducts().createOrderProduct(newOrderProduct);
    return response.data;
  } catch (err) {
    return console.log(err);
  }
};
