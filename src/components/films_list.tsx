import React, {Component} from 'react';
import {connect} from 'react-redux';

class FilmList extends Component {

    static renderFilm(film, index) {
        return (
            <tr key={index}>
                <td>{film.title}</td>
                <td>{film.locations}</td>
                <td>{film.writer}</td>
            </tr>
        )
    }

    render() {

        const {films, isFetching, error} = this.props;

        if (isFetching) {
            return (
                <div>Fetching....</div>
            )
        }

        if (error) {
            return (
                <div>No film data found.</div>
            )
        } else if ( films && films.length > 0) {

            return (
                <table>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Location</th>
                        <th>Writer</th>
                    </tr>
                    </thead>

                    <tbody>
                    {  films.map(this.renderFilm)}
                    </tbody>

                </table>
            )
        }
        return ( <div>No data found yet.</div>)
    }
};

function mapStateToProps(state) {
    console.log('App component films: ', state.fetchedFilms);
    return {
        films: state.fetchedFilms.films,
        error: state.fetchedFilms.error,
        isFetching: state.fetchedFilms.isFetching
    }
}

export default connect(mapStateToProps)(FilmList);