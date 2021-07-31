export default class POKEMON {
    constructor(id, hp = 100, cp = 10, name = '...', picture = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/XXX.png', types = ['Normal'], created = new Date()) {
        this.id = id;
        this.hp = hp;
        this.cp = cp;
        this.name = name;
        this.picture = picture;
        this.types = types;
        this.created = created;
    }
}