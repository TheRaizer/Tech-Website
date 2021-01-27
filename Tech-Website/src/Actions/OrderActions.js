import { orders } from "./api";

export const getPendingOrder = async (userId, onNotFound) => {
  // function that returns an order that is pending and undefined if there is none
  try {
    const response = await orders().getPendingOrder(userId);
    const order = response.data;
    return order;
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
    const order = response.data;
    return order;
  } catch (err) {
    return console.log(err);
  }
};

export const updateOrder = async (id, updatedRecord) => {
  // function that updates an order's information
  try {
    const response = await orders().updateOrder(id, updatedRecord);
    const noContent = response.data;
    return noContent;
  } catch (err) {
    return console.log(err);
  }
};

export const getStatus = async (statusCode) => {
  try {
    const response = await orders().getStatus(statusCode);
    const status = response.data;
    return status;
  } catch (err) {
    return console.log(err);
  }
};
