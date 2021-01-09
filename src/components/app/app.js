import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';

import CharacterPage from '../pages/characterPage';
import BookPage from '../pages/bookPage';
import HousePage from '../pages/housePage';

import {BrowserRouter as Router, Route} from 'react-router-dom';

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
           
            <Router> 
                <div className='app'>
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

                        <Route path='/characters' component={CharacterPage}/>
                        <Route path='/books' component={BookPage}/>
                        <Route path='/houses' component={HousePage}/>

                    </Container>
                </div>
            </Router>
        )
    }
}


export default App;