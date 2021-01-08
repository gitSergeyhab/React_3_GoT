import React from 'react';
import {Col, Row, Container} from 'reactstrap';


const BlockListAndDetails = ({list, detail}) => {
    return (
        <Row>
            <Col md='6'>
                {list}
            </Col>
            <Col md='6'>
                {detail}
            </Col>
        </Row>

    )
}

export default BlockListAndDetails;