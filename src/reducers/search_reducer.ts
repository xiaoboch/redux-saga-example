import ActionType from '../actions/action_types';
import FilmState from './filmState';
import FilmAction from '../actions/index'

// the state here is not application state, it is the
// state this reducer responsible for
export default function (state: FilmState = {
    isFetching: false,
    films: []
}, action: FilmAction) {

    switch (action.type) {
        case ActionType.RECEIVE_FILM :

            console.log('action film received in reducer: ', action.films);
            return new FilmState(action.films, false, null);

        case ActionType.FETCH_FILMS_FAIL:

            console.log('Reducer: Error!!!!', action);
            return new FilmState([], false, action.error);

        case ActionType.FETCHING_FILMS:

            return new FilmState([], true, null);
    }
    return state
}

