export default class GotService {
    constructor() {
        this._urlBase = 'https://anapioficeandfire.com/api'
    }

    async getResource(url) {
        const result = await fetch(`${this._urlBase}${url}`);
        if (!result.ok) throw new Error(`Error status: ${result.status}`)
        const some = await result.json();
        return some;
    }

    async getAllCharacters() {
        const char = await this.getResource(`/characters/`);
        return char.map(this._transformChar);
    }

    async getCharacter(id) {
        const char = await this.getResource(`/characters/${id}`);
        return this._transformChar(char);
    }

    getAllHouses() {
        return this.getResource('/houses/')
    }

    getHouse(id) {
        return this.getResource(`/houses/${id}`)
    }

    getAllbooks() {
        return this.getResource('/books/')
    }

    getBook(id) {
        return this.getResource(`/books/${id}`)
    }

    _transformChar(pers) {
        return {
            name: pers.name,
            gender: pers.gender,
            culture: pers.culture,
            born: pers.born,
            died: pers.died,
        }
    }

    _transformHouse(house) {
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        }
    }
    
    _transformBook(book) {
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publiser: book.publiser,
            released: book.released,

        }
    }
}