import axios from "axios";

// the url used to access the web api
const baseUrl = "http://localhost:57528/api/";

export function users(url = baseUrl + "Users/") {
  // axios http requests that can be used for attaining, changing or adding users by contacting the web api
  return {
    fetchAll: () => axios.get(url),
    fetchById: (id) => axios.get(url + id),
    fetchUsernameById: (id) => axios.get(url + id + "/username"),
    fetchUserByEmailandPassword: (email, password) =>
      axios.get(url + email + "&" + password + "/get"),
    isExistingUser: (email) => axios.get(url + email + "/check-exists"),
    createUser: (newRecord) => axios.post(url + "post-user", newRecord),
    updateUser: (id, updatedRecord) => axios.put(url + id, updatedRecord),
    deleteUser: (id) => axios.delete(url + id),
  };
}

export function orders(url = baseUrl + "Orders/") {
  // axios http requests for modifying or getting orders
  return {
    createOrder: (newRecord) => axios.post(url + "post-order", newRecord),
    fetchUserOrders: (id) => axios.get(url + id + "/get-user-orders"),
    getPendingOrder: () => axios.get(url + "get-pending-order"),
    getOrderByUUID: (uuid) => axios.get(url + uuid + "/get-order-by-UUID"),
    updateOrder: (id, updatedRecord) => axios.put(url + id, updatedRecord),
  };
}

export function orderProducts(url = baseUrl + "OrderProducts/") {
  // axios http requests for modifying or getting orderProducts
  return {
    createOrderProduct: (newOrderProduct) =>
      axios.post(url + "post-orderproduct", newOrderProduct),
    updateOrderProduct: (id, updatedRecord) =>
      axios.put(url + id, updatedRecord),
  };
}

export function products(url = baseUrl + "Products/") {
  // axios http requests for getting info on products
  return {
    getProductsByCategoryCode: (categoryCode) =>
      axios.get(url + categoryCode + "/get-by-category"),
    getProductCategoryByCode: (categoryCode) =>
      axios.get(url + categoryCode + "/get-category"),
    getProducts: () => axios.get(url),
  };
}
