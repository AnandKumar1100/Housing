'Use Strict'

import {call,all} from 'redux-saga/effects';

export default function* rootSaga() {
    const carousalWatcher = require('./screens/Carousal/saga/carousalSaga').default;
    return yield all([
        call(carousalWatcher)
    ])
}
