import React, {Component} from 'react';
import './charDetails.css';


export default class CharDetails extends Component {

    render() {
        // console.log('char', this.props.char)
        if (Object.keys(this.props.char).length === 0) return <h2 className="char-details rounded text-center">Choise anyone</h2>;
        this.props.forDataEmpty(this.props.char)
        const {name, gender, born, died, culture} = this.props.char
        // console.log(name, gender, born, died, culure)
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