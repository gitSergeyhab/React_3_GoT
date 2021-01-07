import React from 'react';
import './eM.css'
import img from './error.jpg'

const ErrorMessage = () => {
    return (
    <>
        <img src={img} alt="error"/>
        {/* <img src={process.env.PUBLIC_URL + "/img/error.jpg"} alt="error"/> */}
        <h5>All is Bad</h5>
    </>
    )
};

export default ErrorMessage;