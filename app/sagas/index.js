import { put, takeEvery, call, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import Events from '../events';
import Api from './api';
import { groups } from '../actions/groups';
import { api } from '../actions/api';

function* Login() {
  const data = yield select(state => {
    return ({
      user: state.api.user,
      pass: state.api.password,
      device: 'shoko-v2',
    });
  });

  const resultJson = yield call(Api.postLogin, '', data);
  if (resultJson.error) {
    alert(resultJson.message);
    return;
  }

  yield put(api({ key: resultJson.data.apikey }));
  yield put(push({ pathname: '/home' }));
}

function* apiSetValue(action) {
  const { payload } = action;

  yield put(api({ [payload.field]: payload.value }));
}

function* getGroups() {
  const apiKey = yield select(state => state.api.key);

  const resultJson = yield call(Api.getGroups, apiKey);
  if (resultJson.error) {
    alert(resultJson.message);
  } else {
    yield put(groups(resultJson.data));
  }
}

function* Exit() {
  yield window.close();
}

export default function* rootSaga() {
  yield [
    takeEvery(Events.GET_GROUPS, getGroups),
    takeEvery(Events.LOGIN, Login),
    takeEvery(Events.API_SET_VALUE, apiSetValue),
    takeEvery(Events.EXIT, Exit),
  ];
}
