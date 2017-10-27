// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import groups from './groups';
import api from './api';

const rootReducer = combineReducers({
  api,
  groups,
  router,
});

export default rootReducer;
