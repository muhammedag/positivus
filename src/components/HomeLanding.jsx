import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router';
import HomeLandingMegaphone from '../assets/images/home-landing-megaphone.png';

const HomeLanding = () => {
    return (
        <Container>
            <div className="hero-content">
                <div className="hero-text-zone">
                    <div className="title">Navigating the digital landscape for success</div>
                    <div className="description">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</div>
                    <Link to={"#"} className='btn'>Book a consultation</Link>
                </div>
                <div className="hero-image-zone">
                    <img src={HomeLandingMegaphone} alt='home-landing-megaphone' />
                </div>
            </div>
        </Container>
    );
}

export default HomeLanding;
