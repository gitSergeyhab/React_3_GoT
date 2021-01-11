import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';

import CharacterPage from '../pages/characterPage';
import BookPage from '../pages/bookPage';
import HousePage from '../pages/housePage';
import BooksItem from '../pages/booksItem';
import CharsItem from '../pages/charsItem';
import HousesItem from '../pages/housesItem';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import './apps.css';

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



                        <Route exact path='/characters' component={CharacterPage}/>

                        <Route path='/characters/:id' 

                            render={
                                ({match}) => {
                                    const {id} = match.params;
                                    return <CharsItem itemId={id}/>
                                    }}
                        />

                        <Route exact path='/houses' component={HousePage}/>

                        <Route path='/houses/:id' 
                            render={({match}) => {
                                    const {id} = match.params;
                                    return <HousesItem itemId={id}/>
                                }}/>
                        
                        <Route exact path='/books' component={BookPage}/>
                        
                        <Route path='/books/:id' 

                            render={
                                ({match}) => {
                                    console.log(match);
                                    const {id} = match.params;
                                    return <BooksItem itemId={id}/>
                                    }}
                        />
                    </Container>
                </div>
            </Router>
        )
    }
}


export default App;