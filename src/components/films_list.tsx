import * as React from 'react';
import {connect} from 'react-redux';
import { Film, AppState } from '../types';


interface FilmListProps {
    films: Film[];
    isFetching: boolean;
    error: string;
}

function FilmList({films, isFetching , error}: FilmListProps){

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
                    { films.map(renderFilm)}
                    </tbody>

                </table>
            )
        }else {

            return ( <div>No data found yet.</div>)
        }

};

function renderFilm(film: Film, index: number) {
    return (
        <tr key={index}>
            <td>{film.title}</td>
            <td>{film.locations}</td>
            <td>{film.writer}</td>
        </tr>
    )
}

function mapStateToProps(state: AppState): FilmListProps {
    console.log('Film list component: ', state);
    const filmState = state.filmState;
    return {
        films: filmState.films,
        error: filmState.error,
        isFetching: filmState.isFetching
    }
}

export default connect(mapStateToProps)(FilmList);
