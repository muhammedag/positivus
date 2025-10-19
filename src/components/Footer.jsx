import React from 'react';
import { Container } from 'react-bootstrap';
import Logo from '../assets/images/footer-logo.png';
import { Link } from 'react-router';
import Linkedin from '../assets/images/footer-linkedin.svg?react';
import Facebook from '../assets/images/facebook.svg?react';
import Twitter from '../assets/images/twitter.svg?react';


const Footer = () => {
    return (
        <Container>
            <footer>
                <div className="first">
                    <div className="img">
                        <img src={Logo} alt='footer-logo' />
                    </div>
                    <div className="links">
                        <Link to={"#"} className='link'>About us</Link>
                        <Link to={"#"} className='link'>Services</Link>
                        <Link to={"#"} className='link'>Use Cases</Link>
                        <Link to={"#"} className='link'>Pricing</Link>
                        <Link to={"#"} className='link'>Blog</Link>
                    </div>
                    <div className="socials">
                        <Link to={"#"} className='btn'>
                            <Linkedin fill="black" width={24} height={24} />
                        </Link>
                        <Link to={"#"} className='btn'>
                            <Facebook fill="black" width={24} height={24} />
                        </Link>
                        <Link to={"#"} className='btn'>
                            <Twitter fill="black" width={24} height={24} />
                        </Link>
                    </div>
                </div>
                <div className="second">
                    <div className="info">
                        <div className="title">Contact us:</div>

                        <div className="text">
                            Email: <Link to={"#"}>info@positivus.com</Link> <br/><br/>
                            Phone: <Link to={"#"}>555-567-8901</Link> <br/><br/>
                            Address: <Link to={"#"}>1234 Main St <br/>Moonstone City, Stardust State 12345</Link>
                        </div>
                    </div>
                    <div className="news-form">
                        <form method='post' action={"#"} autoComplete='off'>
                            <input type='email' name='email' placeholder='Email' />
                            <button type="submit">Subscribe to news</button>
                        </form>
                    </div>
                </div>
                <div className="third">
                    <div className="copyright">© 2023 Positivus. All Rights Reserved.</div>
                    <Link to={"#"}>Privacy Policy</Link>
                </div>
            </footer>
        </Container>
    );
}

export default Footer;
