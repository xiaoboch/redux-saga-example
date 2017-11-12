import { SEARCH_STH, RECEIVE_FILM, FETCH_FILMS_FAIL } from '../actions/index';

// the state here is not application state, it is the
// state this reducer responsible for
export default function(state={
    isFetching: false,
    films: []
}, action){

    console.log('Reducer: action to process is:  ',  action);
    switch (action.type) {
        case RECEIVE_FILM :
            console.log('action film received in reducer: ',  action.films);
            return  {
                isFetching: false,
                films: action.films,
            }
        case FETCH_FILMS_FAIL:
            console.log('Reducer: Error!!!!', action)
            return {
                isFetching: false,
                films: [],
                error: action.error,
            }
    }
    return state
}

