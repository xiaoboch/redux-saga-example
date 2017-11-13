import React, {Component} from 'react';
import SearchBar from '../containers/searchBar';
import FilmList from './films_list'

export default class App extends Component {

    render() {
        return (
            <div>
                <SearchBar/>
                <FilmList/>
            </div>
        );
    }
}
