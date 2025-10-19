import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TitleComponent from './TitleComponent';
import HomeTeamItem from './HomeTeamItem';
import Avatar from '../assets/images/avatar.png';
import { Link } from 'react-router';

const HomeTeam = () => {
    return (
        <Container>
            <TitleComponent title={"Team"} description={"Meet the skilled and experienced team behind our successful digital marketing strategies"} />
            <div className="team">
                <Row className='gy-4'>
                    <Col lg={4} md={12} sm={12}>
                        <HomeTeamItem Avatar={Avatar} Name={"John Smith"} Position={"CEO and Founder"} Description={"10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"} Social={"#"} />
                    </Col>
                    <Col lg={4} md={12} sm={12}>
                        <HomeTeamItem Avatar={Avatar} Name={"Jane Doe"} Position={"Director of Operations"} Description={"7+ years of experience in project management and team leadership. Strong organizational and communication skills"} Social={"#"} />
                    </Col>
                    <Col lg={4} md={12} sm={12}>
                        <HomeTeamItem Avatar={Avatar} Name={"Michael Brown"} Position={"Senior SEO Specialist"} Description={"5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization"} Social={"#"} />
                    </Col>
                    <Col lg={4} md={12} sm={12}>
                        <HomeTeamItem Avatar={Avatar} Name={"Emily Johnson"} Position={"PPC Manager"} Description={"3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis"} Social={"#"} />
                    </Col>
                    <Col lg={4} md={12} sm={12}>
                        <HomeTeamItem Avatar={Avatar} Name={"Brian Williams"} Position={"Social Media Specialist"} Description={"4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement"} Social={"#"} />
                    </Col>
                    <Col lg={4} md={12} sm={12}>
                        <HomeTeamItem Avatar={Avatar} Name={"Sarah Kim"} Position={"Content Creator"} Description={"2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries"} Social={"#"} />
                    </Col>
                </Row>

                <div className="text-end mt-4">
                    <Link to={"#"} className='btn'>See all team</Link>
                </div>
            </div>
        </Container>
    );
}

export default HomeTeam;
