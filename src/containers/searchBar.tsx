import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators} from 'redux';
import { searchFilms} from "../actions/index";

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state ={
            term: ''
        }
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.searchFilms(this.state.term)
    }

    onInputChange(event) {
        this.setState({term: event.target.value})
    }

    render(){
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
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({searchFilms},  dispatch);
}


export default connect(null, mapDispatchToProps)(SearchBar);