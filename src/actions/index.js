import axios from 'axios'

export const FETCH_FILM = 'FETCH_FILM';
export const RECEIVE_FILM = 'RECEIVE_FILM';


export function searchSth(query){

    return {
        type: FETCH_FILM,
        query,
    }
}

export function receiveFilms(films) {
    console.log('Received new film, I will dispatch a new action')
    return {
        type: RECEIVE_FILM,
        films,
    }
}