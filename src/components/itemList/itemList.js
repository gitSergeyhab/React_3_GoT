import React, {Component} from 'react';
import './itemList.css';
import gotService from '../../services/gotService'
import Spiner from '../spiner/spiner'
export default class ItemList extends Component {

    got = new gotService();
    state = {
        charList: []
    }
    componentDidMount() {
        this.got.getAllCharacters()
            .then(charList => {
                this.setState({
                    charList
                })
            })
    }

    render() {

        const charList = this.state.charList
        if (!charList) return <Spiner/>
        
        const personsLi = this.state.charList.map((pers, i) => {
            return (
                <li 
                    key={pers.url} 
                    className="list-group-item"
                    onClick={() => this.props.getChar(pers.url)}
                >
                    {pers.name}
                </li>
                )
        })
        return (
            <ul className="item-list list-group">
                {personsLi}
            </ul>
        );
    }
}