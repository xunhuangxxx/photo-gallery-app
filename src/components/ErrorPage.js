import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
           <h4>Error: 404</h4>
           <p>Oops! Something went wrong, please try again.</p>
           <Link to="/" >Back to Home</Link>
        </div>
    );
}

export default ErrorPage;