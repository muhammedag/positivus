import React from 'react';
import { Link } from 'react-router';
import LinkedinIcon from '../assets/images/linkedin.svg?react';

const HomeTeamItem = ({ Avatar, Name, Position, Social, Description }) => {
    return (
        <div className='person'>
            <Link to={Social} className='social-url'>
                <LinkedinIcon fill="#B9FF66" width={18} height={18} />
            </Link>

            <div className="header">
                <div className="image-section">
                    <img src={Avatar} alt={Name} />
                </div>
                <div className="info">
                    <div className="name">{Name}</div>
                    <div className="position">{Position}</div>
                </div>
            </div>
            <div className="body">
                {Description}
            </div>
        </div>
    );
}

export default HomeTeamItem;
