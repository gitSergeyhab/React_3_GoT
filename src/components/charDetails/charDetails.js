import React, {Component} from 'react';
import './charDetails.css';
import gotService from '../../services/gotService';


export default class CharDetails extends Component {

    got = new gotService();
    state = {
        char: null
    }

    componentDidMount() {
        this.getCharFromId()
    }

    componentDidUpdate(prevProps){
        if (this.props.charId !== prevProps.charId) {
            this.getCharFromId()
        }
    }

    getCharFromId = () => {
        if (!this.props.charId) return;
        
        this.got.getCharacter(this.props.charId)
        .then(char => this.setState({char}))
    }

    render() {
        if (!this.state.char) {
            return <h2 className="char-details rounded text-center">Choise anyone</h2>
        };

        

        this.props.forDataEmpty(this.state.char)
        const {name, gender, born, died, culture} = this.state.char

        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born</span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died</span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture</span>
                        <span>{culture}</span>
                    </li>
                </ul>
            </div>
        );
    }
}