import React from 'react';
import { Link } from 'react-router-dom';

const EmailSent = () => {
    return (
        <div style={{ border: '1px solid red' }}>
            <h3>Receive Email on Exciting offers</h3>
            <button><Link to="/confirmation">Sure!</Link></button>
        </div>
    );
};

export default EmailSent;