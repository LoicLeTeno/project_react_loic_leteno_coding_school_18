import React, { Component, useState } from 'react';

import POKEMON from '../models/pokemon';
import PokemonForm from '../components/form/pokemon-form';

function PokemonAdd() {
    const [id] = useState(new Date().getTime());
    const[pokemon] = useState(new POKEMON(id));

    return (
        <div className="row">
            <h2 className="header center">Ajouter un pokémon</h2>
            <PokemonForm pokemon ={pokemon} isEditForm={false}></PokemonForm>
        </div>
    );
}

export default PokemonAdd;