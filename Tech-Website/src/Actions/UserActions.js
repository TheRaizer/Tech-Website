import { users } from "./api";

export const isExistingUser = async (email) => {
  // this is not kept in the store so it does not need a dispatch function
  try {
    const response = await users().isExistingUser(email);
    return response.data;
  } catch (err) {
    return console.log(err);
  }
};
