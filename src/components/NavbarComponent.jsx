import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router';
import logo from '../assets/images/logo.png';
import { Button } from 'react-bootstrap';


const NavbarComponent = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-transparent">
            <Container>
                <Link to={"/"}>
                    <Navbar.Brand>
                        <img src={logo} alt="Logo"/>
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-between align-items-center">
                    <Nav></Nav>
                    <Nav className='align-items-start align-items-md-center'>
                        <Nav.Link href="#">About us</Nav.Link>
                        <Nav.Link href="#">Services</Nav.Link>
                        <Nav.Link href="#">Use Cases</Nav.Link>
                        <Nav.Link href="#">Pricing</Nav.Link>
                        <Nav.Link href="#">Blog</Nav.Link>
                        <Nav.Link href="#" className='no-underline'>
                            <Button>Request a quote</Button>
                        </Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;
