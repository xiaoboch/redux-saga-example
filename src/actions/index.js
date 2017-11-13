import axios from 'axios'

export const FETCH_FILM = 'FETCH_FILM';
export const RECEIVE_FILM = 'RECEIVE_FILM';
export const FETCH_FILMS_FAIL = 'FETCH_FILMS_FAIL';
export const FETCHING_FILMS = 'FETCHING_FILMS';

function action(type, payload={}){
    return {type, ...payload}
}

export function searchFilms(query){

    return action(FETCH_FILM,query)
}

export function receiveFilms(films) {
    return action(RECEIVE_FILM, {films});
}

export function fetchFilmsFail(error) {
    return action(FETCH_FILMS_FAIL,{films: [], error: error})
}

export function fetchingFilms(){
    return action(FETCHING_FILMS);
}