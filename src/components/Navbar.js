  
import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {LinkContainer} from 'react-router-bootstrap'
import Logo from '../images/GitHub-Mark-Light-32px.png'

const Navigation = (props) => {

    return (
        // <div>
        //     <h1>
        //     <Link to='/' style={{ padding: 25 }}>Portfolio</Link>
        //     <Link to='/about' style={{ padding: 25 }}>About</Link>
        //     <Link to='/blog' style={{ padding: 25 }}>Blog</Link>
        //     <Link to='/contact' style={{ padding: 25 }}>Contact</Link>
        //     </h1>
        // </div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <LinkContainer to="/">
                <Navbar.Brand>Bryan Bottorff:</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto" variant="pills">
                <LinkContainer to="/portfolio">
                    <Nav.Link>Portfolio</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/blog">
                    <Nav.Link>Blog</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/about">
                    <Nav.Link>About</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/contact">
                    <Nav.Link>Contact</Nav.Link>
                </LinkContainer>
                </Nav>
                <Nav>
                    <Link to={{ pathname: "https://github.com/bottosworld" }} target="_blank">
                        <img width="32px" height="auto" className="img-responsive" src={Logo}  alt="github" />       
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation