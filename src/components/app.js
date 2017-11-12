import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {searchSth} from '../actions/index';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.searchSth(this.state.term)
    }

    onInputChange(event) {
        this.setState({term: event.target.value})
    }

    renderData({films, error, isFetching}) {

        if(isFetching) {
            return (
                <div>Fetching....</div>
            )
        }

        if(error) {
            return (
                <div>No film data found.</div>
            )
        }else {
            return (
                films.map(this.renderFilm)
            )
        }
    }

    renderFilm(film, index){
            return (
                <div key={index}>{film.director}</div>
            )
    }

    render() {
        return (
            <div>
                <form onSubmit={(event) => this.onFormSubmit(event)} className='input-group'>
                    <input type="text" placeholder='Give a search input'
                           className='form-control'
                           onChange={(event) => this.onInputChange(event)}
                    />
                    <span className='input-group-btn'>
                    <button type='submit' className='btn btn-secondary'>Search</button>
                </span>
                </form>
                <div>
                    {this.renderData(this.props)}
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({searchSth: searchSth}, dispatch);
}

function mapStateToProps(state) {
    console.log('App component films: ',  state)
    return {
        films: state.fetchedFilms.films,
        error: state.fetchedFilms.error,
        isFetching: state.fetchedFilms.isFetching
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)