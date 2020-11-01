import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import { LOGOUT } from '../../constants/authConstants';
import { Redirect } from 'react-router-dom';


const Header = () => {
    const dispatch = useDispatch()
    const authInfo = useSelector(state => state.auth)
    const {authenticated} = authInfo
    
    const onLogout = () => {
        dispatch({type : LOGOUT});
        <Redirect to='/' />
    }

    const authLinks = (
        <>
        <LinkContainer to='/posts/create'>
            <Nav.Link ><i className="fas fa-pen-square"></i> Create Post</Nav.Link>
        </LinkContainer>
        <Nav.Link onClick={onLogout}><i className="fas fa-sign-out-alt"></i> Logout</Nav.Link>
        </>
    )
    
    const guestLinks = (
        <>
            <LinkContainer to='/login'>
                <Nav.Link ><i className="fas fa-user"></i> Login</Nav.Link>
            </LinkContainer>
        </>
    )
    return (
        <header>
           <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
               <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>My Blog</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <LinkContainer to='/about'>
                                <Nav.Link><i className="fas fa-info-circle"></i> About Me</Nav.Link>
                            </LinkContainer>
                            {authenticated ? authLinks : guestLinks}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
