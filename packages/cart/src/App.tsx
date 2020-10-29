import React from 'react';
import { Router, Switch, Route, Link } from 'react-router-dom';
import { History } from 'history';
import Signin from './components/Signin';
import Signup from './components/Signup';

const App = ({ history }: { history: History }) => {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route path="/auth/signin">
            <Signin />
          </Route>
          <Route path="/auth/signup">
            <Signup />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
