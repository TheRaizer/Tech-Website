import { users } from "./api";

export const isExistingUser = async (email) => {
  /* this function checks if there is an existing user and returns
  a user if there is and undefined if there isnt*/
  try {
    const response = await users().isExistingUser(email);
    return response.data;
  } catch (err) {
    return console.log(err);
  }
};
