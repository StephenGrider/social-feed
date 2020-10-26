import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { Switch, Route, Link } from 'react-router-dom';
import { History } from 'history';
import { createHistory } from './createHistory';
import ProductList from './components/ProductList';

const App = ({ history }: { history: History }) => {
  return (
    <Router history={history}>
      <div>
        <h1>...</h1>
        <ProductList products={[]} />
      </div>
    </Router>
  );
};

const render = async (el: Element, rootHistory?: History) => {
  ReactDOM.render(<App history={createHistory(rootHistory)} />, el);
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_feed-dev-root');

  if (devRoot) {
    render(devRoot);
  }
}

export { render };
