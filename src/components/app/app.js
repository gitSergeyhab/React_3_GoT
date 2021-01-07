import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';

import './apps.css'


const App = () => {
    return (
        <> 
            <Container>
                <Header />
            </Container>
            <Container>
                <Row>
                    <Col lg={{size: 5, offset: 0}}>
                        <RandomChar/>
                        <BtnForRandomChar/>
                    </Col>
                </Row>
                <Row>
                    <Col md='6'>
                        <ItemList />
                    </Col>
                    <Col md='6'>
                        <CharDetails />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

const BtnForRandomChar = () => {
    return (
    <button 
        className="btn btn-dark mt-0 mb-5"
        onClick={toggleRandChar}
        >Toggle Random Chararacter
    </button>)
}

function toggleRandChar() {
    const randomChar = document.querySelector('.random-block');
    randomChar.classList.toggle('display-none')
}

export default App;