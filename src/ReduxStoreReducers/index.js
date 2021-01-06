import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

//configuration that specifies the key to store a persistent reducer at a specified storage.
const persistConfig = {
  key: "user",
  storage,
};

const persistedUserReducer = persistReducer(persistConfig, UserReducer); //create a reducer that will percist and be stored at the given key in the local storage

//combines the reducers both persistent and non-persistent.
export const reducers = combineReducers({
  persistedUserReducer,
});
