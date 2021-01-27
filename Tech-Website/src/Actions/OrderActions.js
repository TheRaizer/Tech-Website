import { orders } from "./api";

export const getPendingOrder = async (onNotFound) => {
  // function that returns an order that is pending and undefined if there is none
  try {
    const response = await orders().getPendingOrder();
    return response.data;
  } catch (err) {
    if (err.response?.status === 404) {
      onNotFound();
    }
    console.log(err);
    return null;
  }
};

export const getOrderByUUID = async (uuid) => {
  // function that returns an order using a uuid
  try {
    const response = await orders().getOrderByUUID(uuid);
    return response.data;
  } catch (err) {
    return console.log(err);
  }
};

export const updateOrder = async (id, updatedRecord) => {
  // function that updates an order's information
  try {
    const response = await orders().updateOrder(id, updatedRecord);
    return response.data;
  } catch (err) {
    return console.log(err);
  }
};
