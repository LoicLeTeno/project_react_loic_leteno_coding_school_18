import React, { useState } from 'react';

import POKEMON from '../../models/pokemon';

import formatType from '../format/format-type';


function PokemonForm({ pokemon }) {
    const [form, setForm] = useState({
        name: { value: pokemon.name, isValid: true },
        hp: { value: pokemon.hp, isValid: true },
        cp: { value: pokemon.cp, isValid: true },
        types: { value: pokemon.types, isValid: true }
    })

    const types = [
        'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
        'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
    ];
    const leType = (type) => {
        return form.types.value.includes(type);
    }
    const inputChange = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        const newField = { [fieldName]: { value: fieldValue } };

        setForm({ ...form, ...newField })
    }
    const selectType = (type, e) => {
        const checked = e.target.checked;
        let newField;

        if (checked) {
            // Si l'utilisateur coche un type, à l'ajoute à la liste des types du pokémon.
            const newTypes = form.types.value.concat([type]);
            newField = { value: newTypes };

        } else {
            // Si l'utilisateur décoche un type, on le retire de la liste des types du pokémon.
            const newTypes = form.types.value.filter((currentType) => currentType !== type);
            newField = { value: newTypes };
        }

        setForm({ ...form, ...{ types: newField } });
    }

    return (
        <form>
            <div className="row">
                <div className="col s12 m8 offset-m2">
                    <div className="card hoverable">
                        <div className="card-image">
                            <img src={pokemon.picture} alt={pokemon.name} style={{ width: '250px', margin: '0 auto' }} />
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                {/* Pokemon name */}
                                <div className="form-group">
                                    <label htmlFor="name">Nom</label>
                                    <input id="name" name="name" type="text" className="form-control" value={form.name.value} onChange={e => inputChange(e)}></input>
                                </div>

                                {/* Pokemon hp */}
                                <div className="form-group">
                                    <label htmlFor="hp">Point de vie</label>
                                    <input id="hp" name="hp" type="number" className="form-control" value={form.hp.value} onChange={e => inputChange(e)}></input>
                                </div>

                                {/* Pokemon cp */}
                                <div className="form-group">
                                    <label htmlFor="cp">Dégâts</label>
                                    <input id="cp" name="cp" type="number" className="form-control" value={form.cp.value} onChange={e => inputChange(e)}></input>
                                </div>

                                {/* Pokemon types */}
                                <div className="form-group">
                                    <label>Types</label>
                                    {types.map(type => (
                                        <div key={type} style={{ marginBottom: '10px' }}>
                                            <label>
                                                <input id={type} type="checkbox" className="filled-in" value={type} checked={leType(type)} onChange={e => selectType(type, e)}></input>
                                                <span>
                                                    <p className={formatType(type)}>{type}</p>
                                                </span>
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="card-action center">
                                {/* Submit button */}
                                <button type="submit" className="btn">Valider</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default PokemonForm;