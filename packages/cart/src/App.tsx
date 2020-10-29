import React from 'react';
import { Router, Switch, Route, Link } from 'react-router-dom';
import { History } from 'history';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Signin from './components/Signin';
import Signup from './components/Signup';

const generateClassName = createGenerateClassName({
  productionPrefix: 'p',
});

const App = ({ history }: { history: History }) => {
  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
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
      </StylesProvider>
    </Router>
  );
};

export default App;
