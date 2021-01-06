import React, {Component} from 'react';
import './randomChar.css';
import gotService from '../../services/gotService';

export default class RandomChar extends Component {

    constructor() {
        super();
        this.updateChar();
    }

    got = new gotService();
    state = {
        name: null,
        gender: null,
        culture: null,
        born: null,
        died: null,
    }

    updateChar() {
        
        const id = Math.floor(Math.random()*666 + 33);
        this.got.getCharacter(id)
        .then(pers => {         
            this.setState({
                name: pers.name,
                gender: pers.gender,
                culture: pers.culture,
                born: pers.born,
                died: pers.died,
            })
        }) 
    }

    render() {
        const{name, gender, culture, born, died} = this.state

        return (
            <div className="random-block rounded">
                <h4>Random Character: {name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender </span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born </span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died </span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture </span>
                        <span>{culture}</span>
                    </li>
                </ul>
            </div>
        );
    }
}
