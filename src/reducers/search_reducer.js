import { SEARCH_STH, RECEIVE_FILM } from '../actions/index';

// the state here is not application state, it is the
// state this reducer responsible for
export default function(state=[], action){


    console.log('Action received in reducer reducer: ',  action);
    switch (action.type) {
        case RECEIVE_FILM :
            console.log('action film received in reducer: ',  action);
            return  action.films.data
    }
    return state
}
