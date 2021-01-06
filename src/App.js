import React, { useState } from "react";
import ReactRouterSetup from "./Components/ReactRouterSetup";
import LoggedInContext from "./Contexts/LoggedInContext";
import { Provider } from "react-redux";
import { store } from "./Actions/store";
import "./App.css";

function App() {
  const [loggedInInfo, setLoggedInInfo] = useState({
    loggedIn: false,
    user: { userId: "", userEmail: "", username: "", password: "" },
  });
  const loggedInValue = { loggedInInfo, setLoggedInInfo };

  return (
    <Provider store={store}>
      <LoggedInContext.Provider value={loggedInValue}>
        <ReactRouterSetup />
      </LoggedInContext.Provider>
    </Provider>
  );
}

export default App;
