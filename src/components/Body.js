import React, { Fragment, useState, useEffect } from 'react'

import POKEMON from '../models/pokemons';
import POKEMONS from '../models/mock-pokemons';
import { render } from '@testing-library/react';


function Body() {

    const [pokemons, setPokemons] = useState([])
    // console.log(pokemons);

    useEffect(() => {
        setPokemons(POKEMONS);
    }, [])

    return (
        <Fragment>
            <h1 className='center'>Pokedex</h1>

            <div className="container">
                <div className="row">
                    {pokemons.map(({ id, name, picture, created }) => (
                        <div className="col s6 m4" key={id}>
                            <div className="card horizontal">
                                <div className="card-image">
                                    <img src={picture} alt={name} />
                                </div>

                                <div className="card-stacked">
                                    <div className="card-content">
                                        <p>{name}</p>

                                        <p><small>{created.toString()}</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    )
}

export default Body