import React from "react";
import ReactRouterSetup from "./Components/ReactRouterSetup";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./Actions/store";
import UserIdContextProvider from "./Contexts/UserIdContext";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <UserIdContextProvider>
          <ReactRouterSetup />
        </UserIdContextProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
