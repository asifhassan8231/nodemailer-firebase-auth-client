import React from 'react';
import { Link } from 'react-router-dom';
import EmailSent from '../EmailSent/EmailSent';

const Home = () => {
    return (
        <div>
            <h2>This is home</h2>
            <nav>
                <ul>
                    <li> <Link to="/home">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
            </nav>

            <EmailSent></EmailSent>

        </div>
    );
};

export default Home;