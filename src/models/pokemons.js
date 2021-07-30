import React, { Component } from 'react';


class POKEMON extends Component {

    // Valeur de base pokémons
    constructor(id, hp = 100, cp = 10, name = 'name', picture = 'http://...', types = ['Normal'], created = new Date()) {
        
        // Données demander pour créer le pokemon
        this.id = id;
        this.hp = hp;
        this.cp = cp;
        this.name = name;
        this.picture = picture;
        this.types = types;
        this.created = created;
    }
    render() {
        return;
    }
}

export default POKEMON;
