import {combineReducers, Reducer} from 'redux';
import  SearchFilmReducer  from './search_reducer';
import {AppState} from "../types/index";

const rootReducer: Reducer<AppState> = combineReducers<AppState>({
  filmState: SearchFilmReducer
});

export default rootReducer;
