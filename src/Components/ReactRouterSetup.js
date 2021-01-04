import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import Shop from './Shop';
import PartShop from './PartShop';

function ReactRouterSetup() {
  return (
    <Router>
      {/* The Switch tag means that only the first matching path will be run */}
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/shop'>
          <Shop />
        </Route>
        <Route path='/part/:id' children={<PartShop />}></Route>
        {/* The * path means it will run on any path */}
        <Route
          path='*'
          render={() => {
            return (
              <div>
                <h1>Error page</h1>
                <Link to='/'>Return To Home</Link>
              </div>
            );
          }}
        ></Route>
      </Switch>
    </Router>
  );
}

export default ReactRouterSetup;
