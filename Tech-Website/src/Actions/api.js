import axios from "axios";

const baseUrl = "http://localhost:57528/api/";

export function users(url = baseUrl + "Users/") {
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
  return {
    createOrder: (newRecord) => axios.post(url + "post-order", newRecord),
    fetchUserOrders: (id) => axios.get(url + id + "/orders"),
  };
}

export function products(url = baseUrl + "Products/") {
  return {
    getProductsByCategory: (category) =>
      axios.get(url + category + "/get-by-category"),
  };
}
