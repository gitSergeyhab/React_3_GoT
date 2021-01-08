import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import ItemList from '../itemList';
import CharDetails, {Field} from '../charDetails';
import BlockListAndDetails from '../blockListAndDetails/blockListAndDetails'


import gotService from '../../services/gotService';
import ErrorMessage from '../errorMessage/errorMessage';

import CharacterPage from '../characterPage/characterPage';


export default class HousePage extends CharacterPage {

    render () {

        if (this.state.error) {
            console.log("EEEEror", this.state)
            return <ErrorMessage/>
        }

        const itemList = (                    
            <ItemList 
                getId={this.getId} 
                getData = {this.got.getAllHouses}
                renderNeedFields={item => item.name}
            />
        );


        const houseDetails = (
        <CharDetails itemId={this.state.itemId} getDatas = {this.got.getHouse}>
            <Field field='region' label='Region'/>
            <Field field='words' label='Words'/>
            <Field field='titles' label='Titles'/>
            <Field field='overlord' label='Overlord'/>
            <Field field='ancestralWeapons' label='Ancestral Weapons'/>
        </CharDetails>
        )

        return (
            <BlockListAndDetails 
                list={itemList} 
                detail={houseDetails}
            />
        )
    }
}