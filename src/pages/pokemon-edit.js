import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';

import POKEMONS from '../models/mock-pokemons';
import POKEMON from '../models/pokemon';
import PokemonForm from '../components/form/pokemon-form';


function PokemonEdit({ match }) {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        POKEMONS.forEach(pokemon => {
            if (match.params.id === pokemon.id.toString()) {
                setPokemon(pokemon);
            }
        })
    }, [match.params.id]);

    return (
        <div>
            {pokemon ? (
                <div className="row">
                    <h2 className="header center">Éditer {pokemon.name}</h2>
                    <PokemonForm pokemon={pokemon}></PokemonForm>
                </div>
            ) : (
                <h4 className="center">Aucun pokémon à afficher !</h4>
            )}
        </div>
    );
}

export default PokemonEdit;