/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import LoginPage from './containers/LoginPage';
import HomePage from './containers/HomePage';

export default () => (
  <Router>
    <App>
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/" component={LoginPage} />
      </Switch>
    </App>
  </Router>
);
