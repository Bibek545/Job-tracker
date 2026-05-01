import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
       <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Job-Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className='nav-link' to="/home">Home</Link>
            <Link className='nav-link' to="/features">Features</Link>
            <Link className='nav-link' to="/about">About</Link>
          </Nav>
          <Nav>
            <Link className='nav-link' to='/login'>Login </Link>
            <Link className='nav-link' to='/register'>Register </Link>

  
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header