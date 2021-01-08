import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import ItemList from '../itemList';
import CharDetails, {Field} from '../charDetails';
import BlockListAndDetails from '../blockListAndDetails/blockListAndDetails'


import gotService from '../../services/gotService';
import ErrorMessage from '../errorMessage/errorMessage'



export default class CharacterPage extends React.Component {
    got = new gotService()

    state = {
        itemId: null,
        error: false
    }

    componentDidCatch() {
        console.log('ERRRROR', this.state)
        this.setState({
            error: true
        })
    }

    getId = id => {
        this.setState({itemId: id})
    }

    render() {

        if (this.state.error) {
            console.log("EEEEror", this.state)
            return <ErrorMessage/>
        }

        const itemList = (                    
            <ItemList 
                getId={this.getId} 
                getData = {this.got.getAllCharacters}
                renderNeedFields={({name, gender}) => `${name} (${gender})`}
            />
        );

        const charDetails = (
        <CharDetails itemId={this.state.itemId}>
            <Field field='gender' label='Gender'/>
            <Field field='culture' label='Culture'/>
            <Field field='born' label='Born'/>
            <Field field='died' label='Died'/>
        </CharDetails>
        )

        return (
            <BlockListAndDetails 
                list={itemList} 
                detail={charDetails}
            />
        )
    }

}