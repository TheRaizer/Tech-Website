import React from "react";

export const LoggedInContext = React.createContext({
  loggedIn: false,
  setLoggedInInfo: () => {},
});

export default LoggedInContext;
