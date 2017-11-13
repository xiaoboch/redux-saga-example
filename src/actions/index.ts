import ActionTypes from './action_types';
import { Film } from '../reducers/filmState'


export interface RequestFilmAction  {

    query: string;
}

export interface FilmAction extends RequestFilmAction {

    type: ActionTypes;
    films: Film[];
}

function action(type:ActionTypes, payload={}){
    return {type, ...payload}
}

export function searchFilms(query: string){

    return action(ActionTypes.FETCH_FILM ,query)
}

export function receiveFilms(films:Film[]) {
    return action(ActionTypes.RECEIVE_FILM, {films});
}

export function fetchFilmsFail(error:string) {
    return action(ActionTypes.FETCH_FILMS_FAIL,{films: [], error: error})
}

export function fetchingFilms(){
    return action(ActionTypes.FETCHING_FILMS);
}
