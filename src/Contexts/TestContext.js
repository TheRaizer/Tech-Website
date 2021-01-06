import React, { createContext } from "react";
import usePersistedState from "../CustomHooks/usePersistedState";

export const TestContext = createContext(null);

//EXAMPLE CODE FOR LATER
const TestFunc = ({ children }) => {
  const [state, setState] = usePersistedState("test_persist", 1);

  const store = {
    test: { state, setState },
  };
  return <TestContext.Provider value={store}>{children}</TestContext.Provider>;
};
export default TestFunc;
