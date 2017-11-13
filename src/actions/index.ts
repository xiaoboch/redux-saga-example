import ActionTypes from './action_types';
import { Film } from '../reducers/filmState'


export interface RequestFilmAction {

    query: string;
}

export interface FilmAction extends RequestFilmAction {

    type: ActionTypes;
    films: Film[];
}

export const searchFilms: (query: string) => RequestFilmAction = (

    (query: string) => ({type: ActionTypes.FETCH_FILM, query})
);

export const receiveFilms: (films: Film[]) => FilmAction = (
    (films: Film[]) => ({type: ActionTypes.RECEIVE_FILM, films})
);

export const fetchFilmsFail: (error: string) => RequestFilmAction = (
    (error: string) => ({type: ActionTypes.FETCH_FILMS_FAIL, films: [], error: error})
);

export const fetchingFilms: () => Action = (
    () => ({type: ActionTypes.FETCHING_FILMS})
);
