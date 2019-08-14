import React from 'react';
import Scrollspy from 'react-scrollspy';
import { ReactComponent as Logo } from '../images/logo.svg';
import { Navbar, Nav, Row, Col, Container } from 'react-bootstrap';
import '../css/Navigation.css';


function Navigation() {
  return (
    <Container className="navbar-container">

      <Navbar className=" col-md-2">
        
        <Row> 
          <Navbar.Brand href="#Screen1"><Logo /></Navbar.Brand>
        </Row>
        <Row>
          <Col>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                <Scrollspy items={ ['Screen1', 'Screen2', 'Screen3', 'Screen4'] } currentClassName="is-current">
                <li><a href="#Screen1">ісія</a></li>
                  <li><a href="#Screen2">Наша місія</a></li>
                  <li><a href="#Screen3">Послуги</a></li>
                  <li><a href="#Screen4">Контакти</a></li>
                </Scrollspy>
                </Nav>
              </Navbar.Collapse>
          </Col>
        </Row>
      </Navbar>
    </Container>
    
  );
}

export default Navigation;