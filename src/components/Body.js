import React, { Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PageError from '../pages/pokemon-error';

import PokemonList from '../pages/pokemon-list';
import PokemonDetails from '../pages/pokemon-details';
import PokemonEdit from '../pages/pokemon-edit';
import PokemonAdd from '../pages/pokemon-add';


function Body() {
    return (
        <Fragment>
            <Router>
                <div>
                    <nav>
                        <div className="nav-wrapper teal">
                            <Link to="/" className="brand-logo center">Loïc le Téno (regarder l'index.html ?) </Link>
                        </div>
                    </nav>

                    <Switch>
                        <Route exact path="/" component={PokemonList} />
                        <Route exact path="/pokemons" component={PokemonList} />
                        <Route exact path="/pokemon/add" component={PokemonAdd} />
                        <Route exact path="/pokemons/edit/:id" component={PokemonEdit} />
                        <Route path="/pokemons/:id" component={PokemonDetails} />
                        <Route component={PageError} />
                    </Switch>
                </div>
            </Router>
        </Fragment>
    )
}

export default Body