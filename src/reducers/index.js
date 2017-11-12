import { combineReducers } from 'redux';
import  SearchFilmReducer  from './search_reducer';

const rootReducer = combineReducers({
  fetchedFilms: SearchFilmReducer
});

export default rootReducer;
