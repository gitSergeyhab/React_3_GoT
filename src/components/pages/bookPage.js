import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import ItemList from '../itemList';
import CharDetails, {Field} from '../charDetails';
import BlockListAndDetails from '../blockListAndDetails/blockListAndDetails'


import gotService from '../../services/gotService';
import ErrorMessage from '../errorMessage/errorMessage';

import CharacterPage from './characterPage';


export default class BookPage extends CharacterPage {

    render () {

        if (this.state.error) {
            console.log("EEEEror", this.state)
            return <ErrorMessage/>
        }

        const itemList = (                    
            <ItemList 
                getId={this.getId} 
                getData = {this.got.getAllbooks}
                renderNeedFields={item => item.name}
            />
        );

        const bookDetails = (
        <CharDetails itemId={this.state.itemId} getDatas = {this.got.getBook}>
            <Field field='numberOfPages' label='number Of Pages'/>
            <Field field='publiser' label='Publiser'/>
            <Field field='released' label='Released'/>
        </CharDetails>
        )

        return (
            <BlockListAndDetails 
                list={itemList} 
                detail={bookDetails}
            />
        )
    }
}

// export default class BookPage extends React.Component {

//     got = new gotService()

//     state = {
//         itemId: null,
//         error: false
//     }

//     componentDidCatch() {
//         console.log('ERRRROR', this.state)
//         this.setState({
//             error: true
//         })
//     }

//     getId = id => {
//         this.setState({itemId: id})
//     }

//     render () {

//         if (this.state.error) {
//             console.log("EEEEror", this.state)
//             return <ErrorMessage/>
//         }

//         const itemList = (                    
//             <ItemList 
//                 getId={this.getId} 
//                 getData = {this.got.getAllbooks}
//                 renderNeedFields={item => item.name}
//             />
//         );

//         const bookDetails = (
//         <CharDetails itemId={this.state.itemId} getDatas = {this.got.getBook}>
//             <Field field='numberOfPages' label='number Of Pages'/>
//             <Field field='publiser' label='Publiser'/>
//             <Field field='released' label='Released'/>
//         </CharDetails>
//         )

//         return (
//             <BlockListAndDetails 
//                 list={itemList} 
//                 detail={bookDetails}
//             />
//         )
//     }
// }