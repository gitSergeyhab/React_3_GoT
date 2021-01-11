import React from 'react';
import ItemList from '../itemList';

import gotService from '../../services/gotService';
import ErrorMessage from '../errorMessage/errorMessage';

import {withRouter} from 'react-router-dom'


class BookPage extends React.Component {
    got = new gotService()

    state = {
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render() {

        if (this.state.error) {
            console.log("EEEEror", this.state)
            return <ErrorMessage/>
        }

         return (
            <ItemList 
                getId={(id) => {this.props.history.push(id)}} 
                getData = {this.got.getAllbooks}
                renderNeedFields={item => item.name}
            />
        )
    }
}

export default withRouter(BookPage)