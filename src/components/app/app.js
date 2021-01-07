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
            char: {}
        }
        this.toggleRandChar = this.toggleRandChar.bind(this)
    }

    toggleRandChar = () => {
        this.setState({
            randomCharVisual: !this.state.randomCharVisual
        })
    }

    getChar = id => {
        this.got.getCharacter(id)
        .then(char => this.setState({char}));
    }

    forDataEmpty = (obj) => {
        Object.keys(obj).map(function(key, index) {
            if (!obj[key]) obj[key] = "No Data";
      });}


    render() {
        // console.log(this.state)
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
                        <ItemList getChar={this.getChar} />
                    </Col>
                    <Col md='6'>
                        <CharDetails char={this.state.char} forDataEmpty={this.forDataEmpty}/>
                    </Col>
                </Row>
            </Container>
        </>
        )
    }
}

// const App = () => {
//     return (
//         <> 
//             <Container>
//                 <Header />
//             </Container>
//             <Container>
//                 <Row>
//                     <Col lg={{size: 5, offset: 0}}>
//                         <RandomChar/>
//                         <BtnForRandomChar/>
//                     </Col>
//                 </Row>
//                 <Row>
//                     <Col md='6'>
//                         <ItemList />
//                     </Col>
//                     <Col md='6'>
//                         <CharDetails />
//                     </Col>
//                 </Row>
//             </Container>
//         </>
//     );
// };

// const BtnForRandomChar = () => {
//     return (
//     <button 
//         className="btn btn-dark mt-0 mb-5"
//         onClick={toggleRandChar}
//         >Toggle Random Chararacter
//     </button>)
// }

// function toggleRandChar() {
//     const randomChar = document.querySelector('.random-block');
//     randomChar.classList.toggle('display-none')
// }

export default App;