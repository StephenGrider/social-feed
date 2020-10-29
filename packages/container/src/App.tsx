import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Router, Switch, Route } from 'react-router-dom';
import Events from './Events';
import Header from './components/Header';
import Progress from './components/Progress';

const ProductApp = lazy(() => import('./components/ProductsApp'));
const CartApp = lazy(() => import('./components/CartApp'));
const DashboardApp = lazy(() => import('./components/DashboardApp'));

const history = createBrowserHistory();
const events = new Events();

const App = () => {
  return (
    <Router history={history}>
      <CssBaseline />
      <div>
        <Header />
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route path="/auth">
              <CartApp history={history} events={events} />
            </Route>
            <Route path="/dashboard">
              <DashboardApp history={history} events={events} />
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
