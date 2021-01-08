import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from '../characterPage/characterPage'

import './apps.css'


import ItemList from '../itemList';
import CharDetails from '../charDetails';

import gotService from '../../services/gotService';

class App extends React.Component {
    got = new gotService();

    constructor() {
        super()
        this.state = {
            randomCharVisual: true,
        }
        this.toggleRandChar = this.toggleRandChar.bind(this)
    }

    toggleRandChar = () => {
        this.setState({
            randomCharVisual: !this.state.randomCharVisual
        })
    }

    render() {

        return (
            <> 
            <Container>
                <Header />
            </Container>
            <Container>
                <Row>
                    <Col lg={{size: 5, offset: 0}}>
                        {this.state.randomCharVisual && <RandomChar/>}
                        <button 
                            className="btn btn-dark mt-0 mb-5"
                            onClick={this.toggleRandChar}
                            >Toggle Random Chararacter
                        </button>
                    </Col>
                </Row>

                <CharacterPage/>

                <Row>
                    <Col md='6'>
                        <ItemList 
                            getId={this.getId} 
                            getData = {this.got.getAllbooks}
                            renderNeedFields={item => item.name}
                        />
                    </Col>
                    <Col md='6'>
                        <CharDetails itemId={this.state.itemId} 
                        />
                    </Col>
                </Row>

                <Row>
                    <Col md='6'>
                        <ItemList 
                            getId={this.getId} 
                            getData = {this.got.getAllHouses}
                            renderNeedFields={({name, region}) => `${name} (${region})`}
                        />
                    </Col>
                    <Col md='6'>
                        <CharDetails itemId={this.state.itemId} 
                        />
                    </Col>
                </Row>
            </Container>
        </>
        )
    }
}

export default App;