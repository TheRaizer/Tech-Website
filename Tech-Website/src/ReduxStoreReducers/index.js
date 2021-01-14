import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import OrderReducer from "./OrderReducer";
import ProductReducer from "./ProductReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

//configuration that specifies the key to store a persistent reducer at a specified storage.
const persistUserConfig = {
  key: "user",
  storage,
};

const persistOrderConfig = {
  key: "order",
  storage,
};

const persistedUserReducer = persistReducer(persistUserConfig, UserReducer); //create a reducer that will percist and be stored at the given key in the local storage
const persistedOrderReducer = persistReducer(persistOrderConfig, OrderReducer);

//combines the reducers both persistent and non-persistent.
export const reducers = combineReducers({
  persistedUserReducer,
  persistedOrderReducer,
  ProductReducer,
});
