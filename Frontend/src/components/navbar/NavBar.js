import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavBar() {



  return (
    <div>
        
        <Navbar sticky="top" style={{background: "black"}} expand="lg">
        <Container fluid>
          <NavbarBrand>Rath Dhan</NavbarBrand>
            <Navbar.Collapse  style={{color:"white",fontFamily:"Salba"}}  id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '200px' ,color:"white"}}
              
              navbarScroll
            >
             { /*
              <Nav.Link style={{color:"white",fontFamily:"Salba"}} href="">Home</Nav.Link>
              <Nav.Link  style={{color:"white",fontFamily:"Salba"}} href="">About</Nav.Link>
              <NavDropdown  style={{color:"white",fontFamily:"Salba"}}  title="Test " id="navbarScrollingDropdown">
                <NavDropdown.Item  href="">Action</NavDropdown.Item>
                <NavDropdown.Item href="">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
    */}
            </Nav>
            <Form className="d-flex" style={{paddingRight:50}}>
             
              
            </Form>

            <Form className="d-flex" style={{paddingRight:50}}>
             
             
              <Button  style={{marginLeft:20}} variant="outline-success">Join</Button>
           
            </Form>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
