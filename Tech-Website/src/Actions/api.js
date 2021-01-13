import axios from "axios";

const baseUrl = "http://localhost:57528/api/";

export function users(url = baseUrl + "Users/") {
  return {
    fetchAll: () => axios.get(url),
    fetchById: (id) => axios.get(url + id),
    fetchUsernameById: (id) => axios.get(url + id + "/username"),
    fetchUserByEmailandPassword: (email, password) =>
      axios.get(url + email + "&" + password + "/get"),
    isExistingUser: (email) => axios.get(url + email + "/checkexists"),
    createUser: (newRecord) => axios.post(url + "postuser", newRecord),
    updateUser: (id, updatedRecord) => axios.put(url + id, updatedRecord),
    deleteUser: (id) => axios.delete(url + id),
  };
}

export function orders(url = baseUrl + "Orders/") {
  return {
    createOrder: (newRecord) => axios.post(url + "postorder", newRecord),
    fetchUserOrders: (id) => axios.get(url + id + "/orders"),
  };
}
