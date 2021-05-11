import React, { Component } from 'react';

export class SearchForm extends Component {
    // inicializamos el state a vacío, donde iremos guardando lo que escribamos en el input (actualizando el state)
    state = {
        inputMovie: ''
    }

    _handleChange = (event) => {
        this.setState({inputMovie: event.target.value})
    }

    _handleSubmit = (event) => {
        event.preventDefault();
        alert(this.state.inputMovie);
    }

    render() {
        return (
            <form onSubmit={this._handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input className="input" type="text" placeholder="Movie to search"
                        onChange={this._handleChange}/>
                    </div>
                    <div className="control">
                        <button className="button is-info">
                            Search
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}