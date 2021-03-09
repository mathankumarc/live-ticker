import "regenerator-runtime/runtime";
import initWebsocket from './socketConnection'
import { call, put, take, select } from 'redux-saga/effects'

const precisionSelector = (state) => {
    return state.precisionSetting;
}

export default function* wsSagas() {

    let channel = yield call(initWebsocket);
    let currentPrecisionSetting = yield select(precisionSelector);

    while (true) {

        const newPrecisionSetting = yield select(precisionSelector);

        if (newPrecisionSetting !== currentPrecisionSetting) {

            currentPrecisionSetting = newPrecisionSetting;
            channel.close();
            channel = yield call(initWebsocket, currentPrecisionSetting);

        }

        const action = yield take(channel)
        yield put(action)

    }

}
