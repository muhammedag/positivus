import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TitleComponent from './TitleComponent';
import HomeServicesItem from './HomeServicesItem';
import Service1 from '../assets/images/services/1.png';
import Service2 from '../assets/images/services/2.png';
import Service3 from '../assets/images/services/3.png';
import Service4 from '../assets/images/services/4.png';
import Service5 from '../assets/images/services/5.png';
import Service6 from '../assets/images/services/6.png';

const HomeServices = () => {
    return (
        <div className='services'>
            <Container>
                <TitleComponent title={"Services"} description={"At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"} />
                <Row className='gy-4'>
                    <Col lg={"6"} md={"6"} sm={"12"}>
                        <HomeServicesItem type={"light"} url={"#"} title={"Search engine optimization"} img={Service1} />
                    </Col>
                    <Col lg={"6"} md={"6"} sm={"12"}>
                        <HomeServicesItem type={"green"} url={"#"} title={"Pay-per-click advertising"} img={Service5} />
                    </Col>
                    <Col lg={"6"} md={"6"} sm={"12"}>
                        <HomeServicesItem type={"dark"} url={"#"} title={"Social Media Marketing"} img={Service3} />
                    </Col>
                    <Col lg={"6"} md={"6"} sm={"12"}>
                        <HomeServicesItem type={"light"} url={"#"} title={"Email Marketing"} img={Service6} />
                    </Col>
                    <Col lg={"6"} md={"6"} sm={"12"}>
                        <HomeServicesItem type={"green"} url={"#"} title={"Content Creation"} img={Service4} />
                    </Col>
                    <Col lg={"6"} md={"6"} sm={"12"}>
                        <HomeServicesItem type={"dark"} url={"#"} title={"Analytics and Tracking"} img={Service2} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HomeServices;
