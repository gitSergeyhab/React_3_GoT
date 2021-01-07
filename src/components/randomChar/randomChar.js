import React, {Component} from 'react';
import './randomChar.css';
import gotService from '../../services/gotService';

import Spiner from '../spiner/spiner';
import ErrorMessage from '../errorMessage/errorMessage';

export default class RandomChar extends Component {

    componentDidMount() {
        this.updateChar();
        this.timer = setInterval(this.updateChar, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }

    got = new gotService();
    state = {
        pers: {},
        loading: true,
        error: false
    }

    onCharLoaded = pers => this.setState({
        pers, 
        loading: false
    })

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updateChar = () => {
        const id = Math.floor(Math.random()*666 + 33);
        this.got.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError)
    }

    render() {
        const{pers, loading, error} = this.state
        this.props.forDataEmpty(pers)
        
        return (
            <div className="random-block rounded">
                { loading ? <Spiner/> : error ? <ErrorMessage/>: <Viev pers={pers}/> }
            </div>
        );
    }
}

const Viev = ({pers}) => {
    const {name, gender, culture, born, died} = pers;
    return (
        <>
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
        </>
    )
}