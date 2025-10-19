import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router';
import HomeLanding from '../components/HomeLanding';
import 'swiper/css';
import 'swiper/css/autoplay';
import HomeBrandsSwiper from '../components/HomeBrandsSwiper';
import HomeServices from '../components/HomeServices';
import HomeGetProposal from '../components/HomeGetProposal';
import HomeStudies from '../components/HomeStudies';
import HomeProcess from '../components/HomeProcess';
import HomeTeam from '../components/HomeTeam';
import HomeTestimonials from '../components/HomeTestimonials';
import HomeContact from '../components/HomeContact';

const Home = () => {
    return (
        <div className='home'>
            <HomeLanding />
            <HomeBrandsSwiper />
            <HomeServices />
            <HomeGetProposal />
            <HomeStudies />
            <HomeProcess />
            <HomeTeam />
            <HomeTestimonials />
            <HomeContact />
        </div>
    );
}

export default Home;
