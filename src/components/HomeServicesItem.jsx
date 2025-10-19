import React from 'react';
import { Link } from 'react-router';
import ServiceArrow from '../assets/images/service-arrow.svg?react';


const HomeServicesItem = ({ type, url, title, img }) => {
    // type => light, dark, green
    return (
        <div className={"service-component " + type}>
            <div className="service-text">
                <div>
                    <span className="title">{title}</span>
                </div>
                <Link to={url} className='go-url'>
                    <div className="icon">
                        <ServiceArrow fill="black" width={24} height={24} /> 
                    </div>
                    <span>Learn More</span>
                </Link>
            </div>

            <div className="service-icon">
                <img src={img} alt={title} />
            </div>
        </div>
    );
}

export default HomeServicesItem;



