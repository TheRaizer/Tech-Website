import { orders } from "./api";

export const getPendingOrder = async () => {
  // function that returns an order that is pending and undefined if there is none
  try {
    const response = await orders().getPendingOrder();
    return response.data;
  } catch (err) {
    return console.log(err);
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
