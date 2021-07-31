import React, { Component, useState } from 'react';

import '../../sass/modules/_pokemon-card.scss';

import formatDate from '../format/format-date';
import formatType from '../format/format-type';
import { useHistory } from 'react-router-dom';


function PokemonCard({ pokemon, borderColor = '#009688' }) {
    const [color, setColor] = useState();
    const history = useHistory();

    const showBorder = () => {
        setColor(borderColor);
    }
    const hideBorder = () => {
        setColor('#f5f5f5');
    }

    const gotoPokemon = () => {
        history.push(`/pokemons/${pokemon.id}`);
    }

    return (
        <div className="col s6 m4" onClick={() => gotoPokemon(pokemon.id)} onMouseEnter={showBorder} onMouseLeave={hideBorder}>
            <div className="card horizontal" style={{ borderColor: color }}>
                <div className="card-image">
                    <img src={pokemon.picture} alt={pokemon.name} />
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <p>{pokemon.name}</p>
                        <p><small>{formatDate(pokemon.created)}</small></p>
                        {pokemon.types.map(type => {
                            <span key={type} className={formatType(type)}>{type}</span>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokemonCard;