import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators} from 'redux';
import { searchFilms} from "../actions/index";
import { FilmState } from '../types';
import * as actions from '../actions';

interface FilmInputProps {
  onFormSubmit: (input: string) => void;
  input?: string;
  placeholder?: string;
}

interface FilmInputState {
  input: string;
}

class SearchBar extends React.Component<FilmInputProps, FilmInputState> {

    constructor(props: FilmInputProps, context: FilmInputState) {
        super(props, context);
        this.state = {
            input: this.props.input || ''
        };
    }

    private onFormSubmit(event: any) {
        event.preventDefault();
        this.props.onFormSubmit(this.state.input);
    }

    private onInputChange(event: any) {
        this.setState({input: event.target.value});
    }

    public render() {
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

// export function mergeProps(stateProps: Object, dispatchProps: Object, ownProps: Object) {
//   return Object.assign({}, ownProps, stateProps, dispatchProps);
// }

function mapDispatchToProps(dispatch: Dispatch<actions.FilmAction>) {
    return bindActionCreators({onFormSubmit: searchFilms},  dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
