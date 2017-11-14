import * as constants from '../constants';
import {Film} from '../types';


export interface RequestFilmAction {
  type: constants.FETCHING_FILMS
  query: string;
}

export interface FetchFilmAction {

  type: constants.FETCH_FILM;
  films: Film[];
}

export interface ReceiveFilmAction {
  type: constants.RECEIVE_FILM;
  films: Film[];
}

export interface FetchFilmActionFail {
  type: constants.FETCH_FILMS_FAIL;
  error: string;
}

export type FilmAction = RequestFilmAction | FetchFilmAction | ReceiveFilmAction | FetchFilmActionFail;


export function searchFilms(query: string) {

  return {
    type: constants.FETCH_FILM,
    query: query,
  }
}

export function receiveFilms(films: Film[]) {

  return {
    type: constants.RECEIVE_FILM,
    films: films
  }
}

export function fetchFilmsFail(error: string) {

  return {
    type: constants.FETCH_FILMS_FAIL,
    error: error
  }
}

export function fetchingFilms() {

  return {
    type: constants.FETCHING_FILMS
  }
}
