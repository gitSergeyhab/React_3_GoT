import React from 'react';
import CharDetails, {Field} from '../charDetails/';
import gotService from '../../services/gotService';

export default class CharsItem extends React.Component {

    got = new gotService();
    
    render() {
        return (
            
            <CharDetails itemId={this.props.itemId}  getDatas = {this.got.getCharacter}>
                <Field field='gender' label='Gender'/>
                <Field field='culture' label='Culture'/>
                <Field field='born' label='Born'/>
                <Field field='died' label='Died'/>
            </CharDetails>      
            )
    }
}