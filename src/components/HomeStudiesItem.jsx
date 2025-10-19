import React from 'react';
import { Link } from 'react-router';
import ServiceArrow from '../assets/images/service-arrow.svg?react';

const HomeStudiesItem = ({ url, text }) => {
    return (
        <div className="studies-item">
            <div className="text">{text}</div>
            <Link to={url} className='go-url'>
                <span>Learn more</span>
                <div className="icon">
                    <ServiceArrow fill="#B9FF66" width={20} height={20} />
                </div>
            </Link>
        </div>
    );
}

export default HomeStudiesItem;
