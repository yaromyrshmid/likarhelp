import React from 'react';
import { ReactComponent as Logo } from './images/logo.svg';
import Snake from './images/snake_logo.svg';
import { Navbar, Nav, Row, Image, Col, Container} from 'react-bootstrap';
import './Content.css';

function Navigation() {
  return (        
  <Navbar expand="sm col-md-2">
    <Row> 
      <Col>
        <Navbar.Brand href="#home"><Logo /></Navbar.Brand>
      </Col>
    </Row>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto flex-column">
          <Nav.Link href="#home">Наша місія</Nav.Link>
          <Nav.Link href="#link">Послуги</Nav.Link>
          <Nav.Link href="#link">Контакти</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

function Screen1() {
  return (
    <Col md={10}>
      <Row className="text-right phoneNum">
        <Col className="text-right">
          <a href="tel:+380671035848">+38 067 103 5848</a>
          <Image srс={Snake} className="snake" alt="snake logo" />
        </Col>
      </Row>
    </Col>
  )
}

function SnakeLogo() {
  return (
    <Image srс="./images/snake_logo.svg" className="snake" alt="snake logo222" />
  )
}

export {Navigation, Screen1, SnakeLogo}
