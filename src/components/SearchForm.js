import React, { Component } from 'react';

const API_KEY = '6f421a98';

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
        const { inputMovie } = this.state;

        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}
        `)
            .then(res => res.json())
            .then(results => {
                const { Search, totalResults } = results;
                console.log({ Search, totalResults });
                this.props.onResults(Search); // ejecutamos el método onResults que es una prop para pasarle al padre los resultados
            })
    }

    render() {
        return (
            // el navegador coge por defecto el último <button> que se encuentre para desencadenar el submit
            <form onSubmit={this._handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input className="input" type="text" placeholder="Movie to search..."
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