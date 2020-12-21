import React from "react";

import { Row, Col, Container, Card, Accordion } from "react-bootstrap";
import "../css/Screen2.css";
import { services } from "../data/services";

const Screen2 = ({ activeCard, changeActiveCard }) => {
  const accordion = services.map((category, categoryInd) => {
    return (
      <Card key={categoryInd} className="card-accordion">
        <Card.Header>
          <Accordion.Toggle
            as="h3"
            variant="link"
            eventKey={`${categoryInd}`}
            onClick={() => changeActiveCard(`${categoryInd}`)}
          >
            {/* {(activeCard === eventKey) ? <span>&darr; </span> : <strong>&rarr; </strong>} */}
            {category.title}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={`${categoryInd}`}>
          <Card.Body>
            {category.services.map((li, liInd) => (
              <p key={liInd} className="white-text">
                <li>{li}</li>
              </p>
            ))}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    );
  });

  return (
    <div id="Screen2" className="section parallax bg2">
      <Container>
        <Row>
          <Col md={{ span: 10, offset: 2 }}>
            <hr className="hr-breaker-light d-none d-md-flex" />
            <Row className="row-top">
              <Col md={{ span: 10, offset: 2 }}>
                <h2 className="white-text">Послуги</h2>
                <Accordion defaultActiveKey={"0"} activeKey={activeCard}>
                  {accordion}
                </Accordion>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <span className="screen2-note">
        Вартість вказана орієнтовна і залежатиме від індивідуальної ситуації,
        про що буде попереджено
      </span>
    </div>
  );
};

export default Screen2;
