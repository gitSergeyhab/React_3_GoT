import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';

import CharacterPage from '../characterPage/characterPage';
import BookPage from '../bookPage/bookPage';
import HousePage from '../housePage/housePage';

import './apps.css';


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
                <BookPage/>
                <HousePage/>
                
            </Container>
        </>
        )
    }
}


export default App;