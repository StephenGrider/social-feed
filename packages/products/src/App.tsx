import React, { useEffect } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { History } from 'history';

import ProductList from './components/ProductList';
import ProductShow from './components/ProductShow';

export default ({ history }: { history: History }) => {
  return (
    <div className="products-app">
      <Router history={history}>
        <Switch>
          <Route exact path="/products/:id" component={ProductShow} />
          <Route path="/" component={ProductList} />
        </Switch>
      </Router>
    </div>
  );
};
