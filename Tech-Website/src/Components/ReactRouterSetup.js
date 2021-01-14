import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import PartShop from "./PartShop/PartShop";
import SignUp from "./Login/SignUp";
import SignIn from "./Login/SignIn";
import CheckOut from "./CheckOut/CheckOut";
import UserOrders from "./UserOrders/UserOrders";
import Cart from "./CartPage/Cart";

function ReactRouterSetup() {
  return (
    <Router>
      {/* The Switch tag means that only the first matching path will be run */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/sign-in">
          <SignIn />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/orders">
          <UserOrders />
        </Route>
        <Route path="/checkout">
          <CheckOut />
        </Route>
        <Route path="/part/:category" children={<PartShop />}></Route>
        {/* The * path means it will run on any path */}
        <Route
          path="*"
          render={() => {
            return (
              <div style={{ textAlign: "center", marginTop: "20%" }}>
                <h1 style={{ color: "white", fontSize: 100 }}>Error page</h1>
                <Link to="/" style={{ color: "white", fontSize: 20 }}>
                  Return To Home
                </Link>
              </div>
            );
          }}
        ></Route>
      </Switch>
    </Router>
  );
}

export default ReactRouterSetup;
