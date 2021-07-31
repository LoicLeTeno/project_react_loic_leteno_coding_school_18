import React, { Component } from 'react';


class PokemonService extends Component {

    // LIEN DB POKEMON

    static getPokemons() {
        return fetch('http://localhost:3001/pokemons')
            .then(response => response.json())
            .catch(error => this.handleError(error));
    }

    static getPokemon(id) {
        return fetch(`http://localhost:3001/pokemons/${id}`)
            .then(response => response.json())
            .then(data => this.isEmpty(data) ? null : data)
            .catch(error => this.handleError(error));
    }


    // MISE A JOUR POKMON

    static updatePokemon(pokemon) {
        return fetch(`http://localhost:3001/pokemons/${pokemon.id}`, {
            method: 'PUT',
            body: JSON.stringify(pokemon),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .catch(error => this.handleError(error));
    }

// SUPPRIMER PÖKEMON

    static deletePokemon(pokemon) {
        return fetch(`http://localhost:3001/pokemons/${pokemon.id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .catch(error => this.handleError(error));
    }

    // AJOUTER POKEMON

    static addPokemon(pokemon) {
        delete pokemon.created;

        return fetch(`http://localhost:3001/pokemons`, {
            method: 'POST',
            body: JSON.stringify(pokemon),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .catch(error => this.handleError(error));
    }

    // RETOUR SI LA DB EST VIDE 

    static isEmpty(data) {
        return Object.keys(data).length === 0;
    }

    // POSSIBLE ERROR

    static handleError(error) {
        console.log(error);
    }
}

export default PokemonService;