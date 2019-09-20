import React from 'react';

import { ReactComponent as Logo } from '../images/logo.svg';
import { Navbar, Nav, Row, Col } from 'react-bootstrap';
import '../css/Navigation.css';


export class Navigation extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }
  
  handleScroll = () => {
    let vh = document.documentElement.clientHeight;
    let screens = document.querySelectorAll('.section');
    let navlinks = document.querySelectorAll('.nav-link');
    let navbar = document.querySelector('.navbar');
    let corection = navbar.getBoundingClientRect().height * 0.75;
    screens.forEach((el, index) => {
      if (el.getBoundingClientRect().y - corection <= 0 && el.getBoundingClientRect().y - corection > -vh ) {
        navlinks.forEach((el) => {
          el.style.fontWeight = "";
          el.style.color = "";
        });
        if (index > 0) {
        navlinks[index-1].style.fontWeight = "bold";
        navlinks[index-1+2].style.fontWeight = "bold";
        }
        if (index === 1) {
          navlinks.forEach((el) => {
            el.style.color = "#FFFFFF";
          });
        }
      }
    })
  }

  anchorClickHandler = (id) => {
    document.getElementById(id).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    });
  }

  render() {
    const navbarCollapse = (color) => {
      return (
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link className={"scroll" + ' ' + color} onClick={()=>this.anchorClickHandler('Screen2')} >Послуги</Nav.Link>
            <Nav.Link className={"scroll" + ' ' + color} onClick={()=>this.anchorClickHandler('Screen4')} >Контакти</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      )
    }
    return (
        <Navbar variant='' expand="md" fixed="top">
          <Row className="d-flex d-md-none">
            <Col xs={7} sm={4}>
              <Navbar.Brand onClick={()=>this.anchorClickHandler('Screen1')} ><Logo /></Navbar.Brand>
              <button className="phoneNum d-block d-sm-none" href="tel:+380671035848">	+38 067 103 5848</button>
            </Col>
            <Col sm={4} className="d-none d-sm-block d-md-none">
              <button className="phoneNum" href="tel:+380671035848">	+38 067 103 5848</button>
            </Col>
            <Col xs={5} sm={4} className="align-right">
              <Navbar.Toggle aria-controls="basic-navbar-nav"/>
              {navbarCollapse('allways-dark')}              
            </Col>
            
          </Row>
          <Row className="d-none d-md-block">
            <Navbar.Brand onClick={()=>this.anchorClickHandler('Screen1')} ><Logo /></Navbar.Brand>
          </Row>
          <Row className="d-none d-md-block">
            <Col>
              {navbarCollapse()}
            </Col>
          </Row>
        </Navbar>
    );
  }
}