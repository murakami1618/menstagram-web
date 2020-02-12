import { call, put, takeEvery } from 'redux-saga/effects';
import {
  PRIVATE_TIMELINE,
  successPrivateTimeline,
  failPrivateTimeline
} from '../actions/timeline/private';
import {
  GLOBAL_TIMELINE,
  successGlobalTimeline,
  failGlobalTimeline
} from '../actions/timeline/global';
import { loading, notLoading } from '../actions/loading';
import * as errorHandle from '../actions/error';
import { getTimeline } from '../api/timeline';

function* privateTimeline(action) {
  yield put(loading());
  yield put(errorHandle.notError());

  if (action.errorSlurps.length > 0) {
    const newSlurpList = action.slurpList.concat();
    for (let errorSlurp of action.errorSlurps) {
      newSlurpList[errorSlurp] = {
        id: newSlurpList[errorSlurp].id,
        text: newSlurpList[errorSlurp].text,
        images: [],
        yum_count: newSlurpList[errorSlurp].yum_count,
        created_at: newSlurpList[errorSlurp].created_at,
        updated_at: newSlurpList[errorSlurp].updated_at,
        user: newSlurpList[errorSlurp].user,
        is_yum: newSlurpList[errorSlurp].is_yum,
      };
    }
    yield put(successPrivateTimeline({data: newSlurpList, status: 200}));
  }

  const { response, error } = yield call(getTimeline, action);
  if (response) {
    response.data.reverse();
    if (action.params.type === 'new') {
      response.data.pop();
      response.data = response.data.concat(action.slurpList);
    } else if (action.params.type === 'old') {
      response.data.shift();
      response.data = action.slurpList.concat(response.data);
    }
    yield put(successPrivateTimeline(response));
  } else {
    yield put(failPrivateTimeline(error.response.status));
    yield put(errorHandle.error(error.response));
  }
  yield put(notLoading());
}

function* globalTimeline(action) {
  yield put(loading());
  yield put(errorHandle.notError());
  const { response, error } = yield call(getTimeline, action);
  if (response) {
    response.data.reverse();
    if (action.params.type === 'new') {
      response.data.pop();
      response.data = response.data.concat(action.slurpList);
    } else if (action.params.type === 'old') {
      response.data.shift();
      response.data = action.slurpList.concat(response.data);
    }
    yield put(successGlobalTimeline(response));
  } else {
    yield put(failGlobalTimeline(error.response.status));
    yield put(errorHandle.error(error.response));
  }
  yield put(notLoading());
}

export const timelineSaga = [
  takeEvery(PRIVATE_TIMELINE, privateTimeline),
  takeEvery(GLOBAL_TIMELINE, globalTimeline)
];
