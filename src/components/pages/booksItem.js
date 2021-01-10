import React from 'react';
import CharDetails, {Field} from '../charDetails/';
import gotService from '../../services/gotService';

export default class BooksItem extends React.Component {

    got = new gotService();
    
    render() {
        return (
            
            <CharDetails itemId={this.props.itemId} getDatas = {this.got.getBook}>
                <Field field='numberOfPages' label='number Of Pages'/>
                <Field field='publiser' label='Publiser'/>
                <Field field='released' label='Released'/>
            </CharDetails>
            
            )
    }
}