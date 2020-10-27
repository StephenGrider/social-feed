import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Switch, Route } from 'react-router-dom';
import Events from './Events';
import Header from './components/Header';

const ProductApp = lazy(() => import('./components/ProductsApp'));
const CartApp = lazy(() => import('./components/CartApp'));

const history = createBrowserHistory();
const events = new Events();

const App = () => {
  return (
    <Router history={history}>
      <div>
        <Header />
        <hr />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/cart">
              <CartApp history={history} events={events} />
            </Route>
            <Route path="/">
              <ProductApp history={history} events={events} />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
