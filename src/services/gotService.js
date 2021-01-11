export default class GotService {
    constructor() {
        this._urlBase = 'https://anapioficeandfire.com/api'
    }

     getResource = async(url) => {
        const result = await fetch(`${this._urlBase}${url}`);
        if (!result.ok) throw new Error(`Error status: ${result.status} !!!`)
        const some = await result.json();
        return some;
    }

     getAllCharacters = async() => {
        const char = await this.getResource(`/characters?page=26&pageSize=7`);
        return char.map(this._transformChar);
    }

     getCharacter = async(id) => {
        const char = await this.getResource(`/characters/${id}`);
        return this._transformChar(char);
    }

    getAllHouses = async() => {
        const houses = await this.getResource('/houses/')
        return houses.map(this._transformHouse);
    }

    getHouse = async(id) => {
        const house = await this.getResource(`/houses/${id}`)
        return this._transformHouse(house)
    }

    getAllbooks = async() => {
        const books = await this.getResource('/books/')
        return books.map(this._transformBook)
    }

    getBook = async(id) => {
        const book = await this.getResource(`/books/${id}`)
        return this._transformBook(book)
    }

    _transformChar = (pers) => {
        return {
            name: this.noData(pers.name),
            gender: this.noData(pers.gender),
            culture: this.noData(pers.culture),
            born: this.noData(pers.born),
            died: this.noData(pers.died),
            url: pers.url.match(/\d+/)[0]
        }
    }

    _transformHouse = (house) => {
        return {
            name: this.noData(house.name),
            region: this.noData(house.region),
            words: this.noData(house.words),
            titles: this.noData(house.titles),
            overlord: this.noData(house.overlord),
            ancestralWeapons: this.noData(house.ancestralWeapons),
            url: house.url.match(/\d+/)[0]
        }
    }
    
    _transformBook = (book) => {
        return {
            name: this.noData(book.name),
            numberOfPages: this.noData(book.numberOfPages),
            publiser: this.noData(book.publiser),
            released: this.noData(book.released),
            url: book.url.match(/\d+/)[0]
        }
    }

    noData(data) {

        if (!data || data.length < 2) return "No Data";
        return data;

    }
}
