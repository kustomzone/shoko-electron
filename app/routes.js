/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import LoginPage from './containers/LoginPage';
import CounterPage from './containers/CounterPage';

export default () => (
  <Router>
    <App>
      <Switch>
        <Route path="/counter" component={CounterPage} />
        <Route path="/" component={LoginPage} />
      </Switch>
    </App>
  </Router>
);
