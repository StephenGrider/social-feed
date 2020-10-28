import React from 'react';
import { Router } from 'react-router';
import { Switch, Route, Link } from 'react-router-dom';
import { History } from 'history';
import CartList from './components/CartList';

const App = ({ history }: { history: History }) => {
  return (
    <Router history={history}>
      <div>
        <CartList />
      </div>
    </Router>
  );
};

export default App;
