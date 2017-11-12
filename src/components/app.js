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

    renderFilm(film, index) {

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
                    {this.props.films.map(this.renderFilm)}
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({searchSth: searchSth}, dispatch);
}

function mapStateToProps(state) {
    console.log('App component films: ',  state.films)
    return { films: state.films  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)