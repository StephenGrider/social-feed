import React from 'react';
import { Router, Switch, Route, Link } from 'react-router-dom';
import { History } from 'history';
import CartList from './components/CartList';
import CartFinalize from './components/CartFinalize';

const App = ({ history }: { history: History }) => {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route path="/cart/finalize">
            <CartFinalize />
          </Route>
          <Route path="/cart">
            <CartList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
