import * as React from 'react';
import {connect} from 'react-redux';
import { Film, FilmState } from '../types';

interface FilmListProps {

}

interface FilmListState {
  films: Film[];
  isFetching: boolean;
  error: string;
}

class FilmList extends React.Component<FilmState> {

    renderFilm(film: Film, index: number) {
        return (
            <tr key={index}>
                <td>{film.title}</td>
                <td>{film.locations}</td>
                <td>{film.writer}</td>
            </tr>
        )
    }

    render() {

        const {films, isFetching , error} = this.props;

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
                    { films.map(this.renderFilm)}
                    </tbody>

                </table>
            )
        }
        return ( <div>No data found yet.</div>)
    }
};

function mapStateToProps(state: FilmState) {
    return {
        films: state.films,
        error: state.error,
        isFetching: state.isFetching
    }
}

export default connect(mapStateToProps)(FilmList);
