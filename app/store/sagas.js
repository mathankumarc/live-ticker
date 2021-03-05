import "regenerator-runtime/runtime";
import initWebsocket from './socketConnection'
import { call, put, take } from 'redux-saga/effects'

export default function* wsSagas() {
    const channel = yield call(initWebsocket)
    while (true) {
        const action = yield take(channel)
        yield put(action)
    }
}
