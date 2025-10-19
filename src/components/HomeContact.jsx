import React from 'react';
import TitleComponent from './TitleComponent';
import { Col, Container, Row } from 'react-bootstrap';
import RightImage from '../assets/images/contact-img.png';

const HomeContact = () => {
    return (
        <Container>
            <TitleComponent title={"Contact Us"} description={"Connect with Us: Let's Discuss Your Digital Marketing Needs"} />
            <div className="contact">
            <div className="img">
                    <img src={RightImage} alt='contact' />
                </div>
                <Row>
                    <Col lg="6" md="12" sm="12">
                        <form method='post' action={"#"} onSubmit={() => { console.log("submitted form"); }} autoComplete='off'>

                            <div className="radios">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="radioDefault" id="sayHi" />
                                    <label className="form-check-label" htmlFor="sayHi">Say Hi</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="radioDefault" id="getQuote" />
                                    <label className="form-check-label" htmlFor="getQuote">Get a Quote</label>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" id="name" className='form-control' placeholder='Name' />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email*</label>
                                <input type="email" name="email" id="email" className='form-control' placeholder='Email' />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message*</label>
                                <textarea name="message" id="" rows="10" className='form-control' placeholder='Message'></textarea>
                            </div>

                            <button type="submit" className='btn'>Send Message</button>
                        </form>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

export default HomeContact;
