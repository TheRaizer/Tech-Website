import { orders } from "./api";

export const getPendingOrder = async () => {
  try {
    const response = await orders().getPendingOrder();
    return response.data;
  } catch (err) {
    return console.log(err);
  }
};

export const getOrderByUUID = async (uuid) => {
  try {
    const response = await orders().getOrderByUUID(uuid);
    return response.data;
  } catch (err) {
    return console.log(err);
  }
};
