import React, { useState, useEffect } from 'react';

import POKEMON from '../models/pokemon';
import POKEMONS from '../models/mock-pokemons';
import PokemonCard from '../components/card/pokemon-card';

function PokemonList() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/pokemons')
        .then(response => response.json())
        .then((pokemons) => {
            setPokemons(pokemons)
        })
    }, []);

    return (
        <div>
            <h1 className="center">Pokédex</h1>
            <div className="container">
                <div className="row">
                    {pokemons.map(pokemon => (
                        <PokemonCard key={pokemon.id} pokemon={pokemon}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PokemonList;