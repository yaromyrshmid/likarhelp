import React from 'react';
import { ReactComponent as Logo } from '../images/logo.svg';
import { Navbar, Nav, Row, Col } from 'react-bootstrap';
import './Navigation.css';


function Navigation() {
  return (        
  <Navbar className="col-md-2">
    <Row> 
      <Navbar.Brand href="#home"><Logo /></Navbar.Brand>
    </Row>
    <Row>
      <Col>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="#home">Наша місія</Nav.Link>
              <Nav.Link href="#link">Послуги</Nav.Link>
              <Nav.Link href="#link">Контакти</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Col>
    </Row>
    </Navbar>
    
  );
}

export default Navigation;