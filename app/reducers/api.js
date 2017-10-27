import { handleAction } from 'redux-actions';
import { API } from '../actions/api';

const defaultState = {
  user: '',
  password: '',
  key: '',
};

const api = handleAction(API,
  (state, action) => {
    if (action.error) return state;
    return Object.assign({}, state, action.payload);
  }, defaultState);


export default api;
