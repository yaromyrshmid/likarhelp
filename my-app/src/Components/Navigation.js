import React from 'react';
import { ReactComponent as Logo } from '../images/logo.svg';
import { Navbar, Nav, Row, Col, Container } from 'react-bootstrap';
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
    console.log('scrollin', vh, navbar.getBoundingClientRect().height, corection);
    screens.forEach((el, index) => {
      console.log(index, el.getBoundingClientRect().y)
      if (el.getBoundingClientRect().y - corection <= 0 && el.getBoundingClientRect().y - corection > -vh ) {
        console.log(index);
        navlinks.forEach((el) => {
          el.style.fontWeight = "";
          el.style.color = "";
        });
        if (index > 0) {
        navlinks[index-1].style.fontWeight = "bold";
        }
        if (index === 1) {
          navlinks.forEach((el) => {
            el.style.color = "#FFFFFF";
          });
        }
      }
    })
  }

  render() {
    return (
      <Container className="navbar-container">

        <Navbar className="col-md-2" variant=''>
          
          <Row> 
            <Navbar.Brand href="#Screen1"><Logo /></Navbar.Brand>
          </Row>
          <Row>
            <Col>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav>
                    <Nav.Link href="#Screen2">Наша місія</Nav.Link>
                    <Nav.Link href="#Screen3">Послуги</Nav.Link>
                    <Nav.Link href="#Screen4">Контакти</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
            </Col>
          </Row>
        </Navbar>
      </Container>
    );
  }
}