import React, {Component} from 'react';
import './itemList.css';
// import gotService from '../../services/gotService'
import Spiner from '../spiner/spiner'
export default class ItemList extends Component {

    // got = new gotService();
    state = {
        itemList: []
    }
    componentDidMount() {
        const {getData} = this.props;

        getData()
            .then(itemList => {
                this.setState({
                    itemList
                })
            })
    }


    render() {

        const itemList = this.state.itemList
        if (!itemList) return <Spiner/>
        
        const dataList = this.state.itemList.map( item => {
            const visualItem = this.props.renderNeedFields(item)
            return (
                <li 
                    key={item.url} 
                    className="list-group-item"
                    // onClick={() => console.log(item.url)}
                    onClick={() => this.props.getId(item.url)}
                >
                    {visualItem} 
                    {/* {item.name} */}
                </li>
                )
        })
        return (
            <ul className="item-list list-group">
                {dataList}
            </ul>
        );
    }
}