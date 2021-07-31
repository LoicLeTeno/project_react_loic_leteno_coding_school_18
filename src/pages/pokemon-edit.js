import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';

import PokemonForm from '../components/form/pokemon-form';
import PokemonService from '../services/pokemon-service';


function PokemonEdit({ match }) {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        PokemonService.getPokemon(+match.params.id).then(pokemon => setPokemon(pokemon));
    }, [match.params.id]);

    return (
        <div>
            {pokemon ? (
                <div className="row">
                    <h2 className="header center">Éditer {pokemon.name}</h2>
                    <PokemonForm pokemon={pokemon} isEditForm={true}></PokemonForm>
                </div>
            ) : (
                <h4 className="center">Aucun pokémon à afficher !</h4>
            )}
        </div>
    );
}

export default PokemonEdit;