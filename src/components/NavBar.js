import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "../components/style.css"
export default function NavBar() {
  return (
    <>
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="/">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <Link to="/" className='mx-3'>HOME</Link> 
            <Link to="/project" className='mx-3'>PROJECT</Link>
            <Link to="/education" className='mx-3'>EDUCATION</Link>
            <Link to="/exp" className='mx-3'>EXPERIENCE</Link>
            <Link to="/footer" className='mx-3'>CONTACT ME</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )

}
