import React, { useState, useEffect } from 'react';

import PokemonCard from '../components/card/pokemon-card';
import PokemonService from '../services/pokemon-service';

import { Link } from 'react-router-dom';


function PokemonList() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        PokemonService.getPokemons().then(pokemons => setPokemons(pokemons));
    }, []);

    return (
        <div>
            <h1 className="center">Pokédex</h1>
            <div className="container">
                <div className="row">
                    {pokemons.map(pokemon => (
                        <PokemonCard key={pokemon.id} pokemon={pokemon} />
                    ))}
                </div>

                <Link className="btn-floating btn-large waves-effect waves-light red 2-depth-3" style={{ position: 'fixed', bottom: '25px', right: '25px' }} to="/pokemon/add">
                    <i className="material-icons">add</i>
                </Link>
            </div>
        </div>
    );
}

export default PokemonList;