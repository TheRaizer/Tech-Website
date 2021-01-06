import axios from "axios";

const baseUrl = "http://localhost:57528/api/";

export function users(url = baseUrl + "Users/") {
  return {
    fetchAll: () => axios.get(url),
    fetchById: (id) => axios.get(url + id),
    create: (newRecord) => axios.post(url + "postuser", newRecord),
    update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
    delete: (id) => axios.delete(url + id),
  };
}

export default users;
