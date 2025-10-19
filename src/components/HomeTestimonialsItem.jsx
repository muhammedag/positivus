import React from 'react';
import Chevron from '../assets/images/chevron-down.png';

const HomeTestimonialsItem = ({Comment, CommentOwner, Position}) => {
    return (
        <div className='item'>
            <div className="comment">{Comment}</div>
            <img src={Chevron} alt='bubble' className='chevron' />
            <div className="from">
                <div className="name">{CommentOwner}</div>
                <div className="position">{Position}</div>
            </div>
        </div>
    );
}

export default HomeTestimonialsItem;
