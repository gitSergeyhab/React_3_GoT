import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';

import gotService from '../../services/gotService'

import './apps.css'

class App extends React.Component {

    got = new gotService()

    constructor() {
        super()
        this.state = {
            randomCharVisual: true,
            charId: null
        }
        this.toggleRandChar = this.toggleRandChar.bind(this)
    }

    toggleRandChar = () => {
        this.setState({
            randomCharVisual: !this.state.randomCharVisual
        })
    }

    getCharId = id => {
        this.setState({charId: id})
    }

    forDataEmpty = (obj) => {
        Object.keys(obj).map(function(key, index) {
            if (!obj[key]) obj[key] = "No Data";
      });}

    render() {

        return (
            <> 
            <Container>
                <Header />
            </Container>
            <Container>
                <Row>
                    <Col lg={{size: 5, offset: 0}}>
                        {this.state.randomCharVisual && <RandomChar forDataEmpty={this.forDataEmpty}/>}
                        <button 
                            className="btn btn-dark mt-0 mb-5"
                            onClick={this.toggleRandChar}
                            >Toggle Random Chararacter
                        </button>
                    </Col>
                </Row>
                <Row>
                    <Col md='6'>
                        <ItemList getCharId={this.getCharId} />
                    </Col>
                    <Col md='6'>
                        <CharDetails charId={this.state.charId} forDataEmpty={this.forDataEmpty}/>
                    </Col>
                </Row>
            </Container>
        </>
        )
    }
}

export default App;