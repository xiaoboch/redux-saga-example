import { combineReducers } from 'redux';
import  SearchFilmReducer  from './search_reducer';

const rootReducer = combineReducers({
  films: SearchFilmReducer
});

export default rootReducer;
