import React from 'react'
// import {Link} from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const Header = () => {
    return (
        <header>
           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
               <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>My Blog</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <LinkContainer to='/about'>
                                <Nav.Link><i className="fas fa-user"></i> About</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/login'>
                                <Nav.Link ><i className="fas fa-user"></i> Login</Nav.Link>
                            </LinkContainer>

                            {/* <Nav.Link as={Link} to='/' > <i className="fas fa-home"></i> Home</Nav.Link>
                            <Nav.Link as={Link} to='/about' ><i className="fas fa-user"></i> About</Nav.Link>
                            <Nav.Link as={Link} to='/login' ><i className="fas fa-user"></i> Login</Nav.Link> */}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
