import {takeEvery, delay} from 'redux-saga';
import {fork, call, all, put} from 'redux-saga/effects';
import * as actions from '../actions/index'
import axios from 'axios';

const data_url = 'https://data.sfgov.org/resource/wwmu-gmzc.json'

function searchApi(query) {
    return axios.get(data_url).then(response =>({ response})).catch(error =>(error) );
}

function* callFetchFilm(action) {
    console.log('Saga middleware process actions:  ', action)
    let query = action.query
    let {response, error} = yield call(searchApi, query);

    if (response && response.status == 200) {
        console.log('response data is ', response.data)
        yield put(actions.receiveFilms(response.data));
    } else {
        if(!error){
            error = response.statusText;
        }
        yield put(actions.fetchFilmsFail(error));
    }

}

//Match FETCH_FILM actions and invoke callFetchFile which
// will take the action as parameter
function* watchFetchFilmSaga() {
    yield takeEvery(actions.FETCH_FILM, callFetchFilm);
}

export default function* rootSaga() {
    yield all([
        fork(watchFetchFilmSaga),
    ])
}
