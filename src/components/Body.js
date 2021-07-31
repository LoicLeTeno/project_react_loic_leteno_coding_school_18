import React, { Fragment, useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import POKEMON from '../models/pokemon';
import POKEMONS from '../models/mock-pokemons';
import PokemonList from '../pages/pokemon-list';
import PokemonDetails from '../pages/pokemon-details';


function Body() {

    // const [pokemons, setPokemons] = useState([])
    // // console.log(pokemons);

    // useEffect(() => {
    //     setPokemons(POKEMONS);
    // }, [])

    return (
        <Fragment>
            <Router>
                <div>
                    <nav>
                        <div className="nav-wrapper teal">
                            <Link to="/" className="brand-logo center">Pokédex</Link>
                        </div>
                    </nav>

                    <Switch>
                        <Route exact path="/" component={PokemonList} />
                        <Route exact path="/pokemons" component={PokemonList} />
                        <Route path="/pokemons/:id" component={PokemonDetails} />
                    </Switch>
                </div>
            </Router>
        </Fragment>
    )
}

export default Body