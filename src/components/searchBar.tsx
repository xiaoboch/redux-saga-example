import * as React from 'react';

interface InputProps {
    onFormSubmit: (input: string) => void;
    input?: string;
    placeholder?: string;
}

interface InputState {
    input: string;
}

export default class SearchBar extends React.Component<InputProps, InputState> {

    constructor(props: InputProps, context: InputState) {
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

