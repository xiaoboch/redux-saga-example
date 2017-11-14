import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators} from 'redux';
import { searchFilms} from "../actions/index";
import * as actions from '../actions';
import SearchBar from '../components/searchBar';

const SB: any= SearchBar;

// export function mergeProps(stateProps: Object, dispatchProps: Object, ownProps: Object) {
//   return Object.assign({}, ownProps, stateProps, dispatchProps);
// }

function mapDispatchToProps(dispatch: Dispatch<actions.FilmAction>) {
    return bindActionCreators({onFormSubmit: searchFilms},  dispatch);
}

export default connect(null, mapDispatchToProps)(SB);
