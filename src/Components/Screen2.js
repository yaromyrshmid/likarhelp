import React, { useState } from 'react';

import { Row, Col, Container, Card, Accordion } from 'react-bootstrap';
import '../css/Screen2.css';
import { services } from './services';

const Screen2 = () => {
  const [activeCard, setActiveCard] = useState('0_0');

  const changeActiveHandler = (eventKey) => {
    setActiveCard(eventKey);
    console.log(eventKey)
  }

  const accordion = services.map((service, serviceInd) => {
    return (
      Object.keys(service).map((category, categoryInd) => {
        // Setting up the list of services in each category
        const listArray = service[category].map((li, liInd) => {
          return (
            <p key={`${serviceInd}_${categoryInd}_${liInd}`} className="white-text">
              <li>{li}</li>
            </p>)
        })
        const eventKey = `${serviceInd}_${categoryInd}`;
 
        //Setting up Cards for each serivce
        return (
          <Card key={`${serviceInd}_${categoryInd}`} className="card-accordion">
            <Card.Header>
              <Accordion.Toggle as='h3' variant="link" eventKey={eventKey} onClick={() => changeActiveHandler(eventKey)}>
                {/* {(activeCard === eventKey) ? <span>&darr; </span> : <strong>&rarr; </strong>} */}
                {category}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={`${serviceInd}_${categoryInd}`}>
              <Card.Body>
                {listArray}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        )
      })
    )
  })

  return (
    
    <div id="Screen2" className="section parallax bg2">
      <Container>
        <Row>
          <Col md={{span: 10, offset: 2}}>
            <hr className="hr-breaker-light"/>
            <Row className="row-top">
              <Col md={2}>
                {/* <h1 className="slide-number">01</h1> */}
              </Col>
              <Col md={10}>
              <h2 className="white-text">Наші<br/> послуги</h2>
              <Accordion defaultActiveKey={activeCard}>
                {accordion}
              </Accordion>
              </Col>



              {/* <Col md={{span: 4, offset: 8}}>
                <div className="blured-circle">
                </div>
                <div className="screen2-text">
                <div className="screen2-logo-container"><Image src={FamilyLogo} /></div>
                
                <h2 className="white-text text-right">Наша<br/> місія</h2>
                <p className="white-text text-right">Медичний сервіс. Його так бракує медицині сьогодення. Ми створюємо просте і якісне надання послуг людям. Це необхідно і зручно як пацієнтам, так і лікарям.</p>
                </div>
              </Col> */}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Screen2;