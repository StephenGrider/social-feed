import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
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

const App = ({
  history,
  onSignIn,
}: {
  history: History;
  onSignIn?: () => void;
}) => {
  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Switch>
            <Route path="/auth/signin">
              <Signin onSignIn={onSignIn} />
            </Route>
            <Route path="/auth/signup">
              <Signup onSignIn={onSignIn} />
            </Route>
          </Switch>
        </div>
      </StylesProvider>
    </Router>
  );
};

export default App;
