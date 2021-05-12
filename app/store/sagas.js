import 'regenerator-runtime/runtime';
import {
  call, put, take, select,
} from 'redux-saga/effects';
import initWebsocket from './socketConnection';
import { getSocketClosedForPrecisonChange } from './actions/socketActions';
import { BOOK_ACTION_CONSTANTS } from './constants/index';

const precisionSelector = (state) => state.precisionSetting;

export default function* wsSagas() {
  let channel = yield call(initWebsocket);
  let currentPrecisionSetting = yield select(precisionSelector);

  while (true) {
    const newPrecisionSetting = yield select(precisionSelector);

    if (newPrecisionSetting !== currentPrecisionSetting) {
      currentPrecisionSetting = newPrecisionSetting;
      channel.close();
      yield put(getSocketClosedForPrecisonChange());
      yield put({ type: BOOK_ACTION_CONSTANTS.CLEAR_BOOK_ENTRIES });
      channel = yield call(initWebsocket, currentPrecisionSetting);
    }

    const action = yield take(channel);
    yield put(action);
  }
}
