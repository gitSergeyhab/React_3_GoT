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

    getAllCharacters() {
        return this.getResource('/characters/')
    }

    getCharacter(id) {
        return this.getResource(`/characters/${id}`)
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
}