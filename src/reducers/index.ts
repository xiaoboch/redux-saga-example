import { combineReducers } from 'redux';
import  SearchFilmReducer  from './search_reducer';
import { FilmState} from "../types/index";

const rootReducer = combineReducers<FilmState>({
  films: SearchFilmReducer
});

export default rootReducer;
