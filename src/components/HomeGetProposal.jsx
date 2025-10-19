import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router';
import ProposalImage from '../assets/images/proposal-img.png';

const HomeGetProposal = () => {
    return (
        <Container>
            <div className='proposal'>
                <div className="text-section">
                    <div className="title">Let’s make things happen</div>
                    <div className="description">Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</div>
                    <Link to={"#"} className='btn'>Get your free proposal</Link>
                </div>
                <div className="image-section">
                    <img src={ProposalImage} alt='proposal-image' />
                </div>
            </div>
        </Container>
    );
}

export default HomeGetProposal;
