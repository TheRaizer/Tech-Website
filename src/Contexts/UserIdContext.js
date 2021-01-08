import React, { createContext } from "react";
import usePersistedState from "../CustomHooks/usePersistedState";

export const UserIdContext = createContext();

const UserIdContextProvider = ({ children }) => {
  const [userId, setUserId] = usePersistedState("user_id", "");
  const user = { userId, setUserId };

  return (
    <UserIdContext.Provider value={user}>{children}</UserIdContext.Provider>
  );
};
export default UserIdContextProvider;
