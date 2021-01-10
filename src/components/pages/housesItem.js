import React from 'react';
import CharDetails, {Field} from '../charDetails/';
import gotService from '../../services/gotService';

export default class HousesItem extends React.Component {

    got = new gotService();
    
    render() {
        return (
            <CharDetails itemId={this.props.itemId} getDatas = {this.got.getHouse}>
                <Field field='region' label='Region'/>
                <Field field='words' label='Words'/>
                <Field field='titles' label='Titles'/>
                <Field field='overlord' label='Overlord'/>
                <Field field='ancestralWeapons' label='Ancestral Weapons'/>
            </CharDetails>
            )
    }
}