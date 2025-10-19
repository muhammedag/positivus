import React from 'react';

const TitleComponent = ({ title, description }) => {
    return (
        <div className='title-component'>
            <div className="title">{title}</div>
            <div className="description">{description}</div>
        </div>
    );
}

export default TitleComponent;
