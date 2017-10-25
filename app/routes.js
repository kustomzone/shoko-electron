/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import LoginPage from './containers/LoginPage';
import HomePage from './containers/HomePage';
import SeriesPage from './containers/SeriesPage';

export default () => (
  <App>
    <Switch>
      <Route exact path="/home" component={HomePage} />
      <Route exact path="/series" component={SeriesPage} />
      <Route exact path="/" component={LoginPage} />
    </Switch>
  </App>
);
