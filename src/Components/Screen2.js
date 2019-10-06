import React, { useState } from 'react';

import { Row, Col, Container, Card, Accordion } from 'react-bootstrap';
import '../css/Screen2.css';
import { services } from './services';

const Screen2 = () => {
  const [activeCard, setActiveCard] = useState('0_0');

  const changeActiveHandler = (eventKey) => {
    setActiveCard(eventKey);
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
            <hr className="hr-breaker-light d-none d-md-flex"/>
            <Row className="row-top">
              
              <Col md={{span: 10, offset: 2}}>
              <h2 className="white-text">Послуги</h2>
              <Accordion defaultActiveKey={activeCard}>
                {accordion}
              </Accordion>
              </Col>

            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Screen2;