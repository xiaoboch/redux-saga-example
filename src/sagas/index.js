import {takeEvery, delay} from 'redux-saga';
import {fork, call, all, put} from 'redux-saga/effects';
import * as actions from '../actions/index'
import axios from 'axios';

const data_url = 'https://data.sfgov.org/resource/wwmu-gmzc.json'

function searchApi(query) {
    return axios.get(data_url);
}
function* callFetchFilm(action) {
    console.log('Saga middleware process actions:  ', action)
    let query = action.query
    const films = yield call(searchApi, query);
    yield put(actions.receiveFilms(films));
}

function* watchFetchFilmSaga() {
        yield takeEvery(actions.FETCH_FILM, callFetchFilm);
}

export default function* rootSaga() {
    yield all([
        fork(watchFetchFilmSaga),
    ])
}

// export function* incrementAsync(action) {
//     console.log('saga functions to process action: ', action)
//     yield delay(1000)
//     yield put({type: RECEIVE_FILM})
// }
//
// export default function* rootSaga() {
//     yield takeEvery(FETCH_FILM, incrementAsync)
// }