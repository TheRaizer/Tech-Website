import React, { createContext } from "react";
import usePersistedState from "../CustomHooks/usePersistedState";

export const UserIdContext = createContext();

const UserIdContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = usePersistedState("user_id", {
    userId: null,
    hasSignedIn: false,
  });
  const user = { userInfo, setUserInfo };

  return (
    <UserIdContext.Provider value={user}>{children}</UserIdContext.Provider>
  );
};
export default UserIdContextProvider;
