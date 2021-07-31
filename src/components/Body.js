import React, { Fragment, useState, useEffect } from 'react'

import POKEMON from '../models/pokemon';
import POKEMONS from '../models/mock-pokemons';
import PokemonList from '../pages/pokemon-list';


function Body() {

    // const [pokemons, setPokemons] = useState([])
    // // console.log(pokemons);

    // useEffect(() => {
    //     setPokemons(POKEMONS);
    // }, [])

    return (
        <Fragment>
            <PokemonList />
        </Fragment>
    )
}

export default Body