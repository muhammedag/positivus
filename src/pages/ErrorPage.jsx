import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
            error page
            <br/>
            <br/>
            <Link to={"/"}>go home</Link>
        </div>
    );
}

export default ErrorPage;
