import * as React from 'react';
import SearchBar from '../containers/searchBar';
import FilmList from './films_list'

export default class App extends React.Component {

    render() {
        return (
            <div>
                <SearchBar/>
                <FilmList/>
            </div>
        );
    }
}
