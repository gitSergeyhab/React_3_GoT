import React, {Component} from 'react';
import './charDetails.css';
import gotService from '../../services/gotService';

const Field = ({item, field, label}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>

    )
}

export {Field};


export default class CharDetails extends Component {

    got = new gotService();
    state = {
        item: null
    }

    componentDidMount() {
        this.getItemFromId()
    }

    componentDidUpdate(prevProps){
        if (this.props.itemId !== prevProps.itemId) {
            this.getItemFromId()
        }
    }

    getItemFromId = () => {
   
        if (!this.props.itemId) return;
        const {getDatas} = this.props;
        
        getDatas(this.props.itemId)
            .then(item => this.setState({item}))
        // console.log(this.state, this.props.itemId)
        // this.foo.bar = 0 // special fall
    }

    render() {
        // console.log(this.state)
        if (!this.state.item) {
            return <h2 className="text-white">Choise anyone</h2>
        };
        const {item} = this.state;

        const {name} = item;

       
                

        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {item})
                        })
                    }
                </ul>
            </div>
        );
    }
}