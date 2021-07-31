import React, { Component, useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';

import '../../sass/modules/_pokemon-card.scss';

import POKEMONS from '../../models/mock-pokemons';
import POKEMON from '../../models/pokemon';


function PokemonCard({ pokemon, borderColor = '#009688' }) {

    // PokemonCard.propTypes = {
    //     pokemon: POKEMON
    // }

    const [color, setColor] = useState();
    const showBorder = () => {
        setColor(borderColor);
    }
    const hideBorder = () => {
        setColor('#f5f5f5');
    }

    return (
        <div className="col s6 m4" onMouseEnter={showBorder} onMouseLeave={hideBorder}>
            <div className="card horizontal" style={{ borderColor: color }}>
                <div className="card-image">
                    <img src={pokemon.picture} alt={pokemon.name} />
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <p>{pokemon.name}</p>
                        <p><small>{pokemon.created.toString()}</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokemonCard