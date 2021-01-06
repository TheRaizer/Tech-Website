import { createStore, applyMiddleware, compose } from "redux";
import { reducers } from "../ReduxStoreReducers"; //since we are not passing any file it will immediately look for index.js
import thunk from "redux-thunk";

/*typically in the store can hold any number of your applications states, however
 * you usually only add reducers(which have the states) that will be used globally in
 * the application. */

export const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
