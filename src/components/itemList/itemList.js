import React, {useState, useEffect} from 'react';
import './itemList.css';
// import gotService from '../../services/gotService'
import Spiner from '../spiner/spiner'

export default function ItemList({getData, getId, renderNeedFields})  {

    const [itemList, updateList] = useState([])

    useEffect(() => {
        getData().then( data => updateList(data) )},
        []) 

    function renderItems(arr) {
        return arr.map( item => {
            const visualItem = renderNeedFields(item);
            return (
                <li 
                    key={item.url} 
                    className="list-group-item"
                    onClick={() => getId(item.url)}
                >
                    {visualItem} 
                </li>
                )
        })
    }

    if (!itemList) return <Spiner/>;

    const dataList = renderItems(itemList);

    return (
        <ul className="item-list list-group">
            {dataList}
        </ul>
    );

}


// export default class ItemList extends Component {

//     state = {
//         itemList: []
//     }
//     componentDidMount() {
//         const {getData} = this.props;

//         getData()
//             .then(itemList => {
//                 this.setState({
//                     itemList
//                 })
//             })
//     }


//     render() {
   

//         const itemList = this.state.itemList
//         if (!itemList) return <Spiner/>
        
//         const dataList = this.state.itemList.map( item => {
//             const visualItem = this.props.renderNeedFields(item)
//             return (
//                 <li 
//                     key={item.url} 
//                     className="list-group-item"
//                     onClick={() => this.props.getId(item.url)}
//                 >
//                     {visualItem} 
//                     {/* {item.name} */}
//                 </li>
//                 )
//         })
//         return (
//             <ul className="item-list list-group">
//                 {dataList}
//             </ul>
//         );
//     }
// }