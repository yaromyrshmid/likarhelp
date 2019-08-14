import React from 'react';
import FamilyLogo from '../images/family_logo.svg'
import { Row, Col, Image, Container } from 'react-bootstrap';
import '../css/Screens.css';
import '../css/Screen2.css';

function Screen2() {
  return (
    <div id="Screen2" className="section parallax bg2">
      <Container>
        <Row>
          <Col md={{span: 10, offset: 2}}>
            <hr className="hr-breaker-light"/>
            <Row className="row-top">
              <Col md={2}>
                <h1 className="slide-number">01</h1>
              </Col>
              <Col md={{span: 4, offset: 8}}>
                <div className="blured-circle">
                </div>
                <div className="screen2-text">
                <div className="screen2-logo-container"><Image src={FamilyLogo} /></div>
                
                <h2 className="white-text text-right">Наша<br/> місія</h2>
                <p className="white-text text-right">Медичний сервіс. Його так бракує медицині сьогодення. Ми створюємо просте і якісне надання послуг людям. Це необхідно і зручно як пацієнтам, так і лікарям.</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Screen2;