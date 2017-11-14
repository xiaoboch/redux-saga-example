import * as constants from '../constants/index';
import { FilmState } from '../types';
import { FilmAction } from '../actions/index'

// the state here is not application state, it is the
// state this reducer responsible for
export default function filmReducer(state: FilmState, action: FilmAction) :FilmState{

    switch (action.type) {
        case constants.RECEIVE_FILM:
            // console.log('action film received in reducer: ', action.films);
            return new FilmState(action.films, false, null);

        case constants.FETCH_FILMS_FAIL:

            return new FilmState([], false, action.error);

        case constants.FETCHING_FILMS:

            return new FilmState([], true, null);
    }
    return state
}
