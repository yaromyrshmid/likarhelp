import React from "react";

import { Container, Card, Accordion } from "react-bootstrap";
import "../css/Screen2.css";
import { services } from "../data/services";

const Screen2 = ({ activeCard, changeActiveCard }) => {
  return (
    <div id="Screen2" className="screen screen2-wrapper">
      <hr className="hr-breaker d-none d-md-block hr-breaker-light" />

      <Container className="screen2-container">
        <div className="screen2-content">
          <h2 className="white-text">Послуги</h2>
          <Accordion defaultActiveKey={"0"} activeKey={activeCard}>
            {services.map((category, categoryInd) => (
              <Card key={categoryInd} className="card-accordion">
                <Card.Header>
                  <Accordion.Toggle
                    as="h3"
                    variant="link"
                    eventKey={`${categoryInd}`}
                    onClick={() => changeActiveCard(`${categoryInd}`)}
                  >
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
            ))}
          </Accordion>
        </div>

        <span className="screen2-note">
          Вартість вказана орієнтовна і залежатиме від індивідуальної ситуації,
          про що буде попереджено
        </span>
      </Container>
    </div>
  );
};

export default Screen2;
