import React from "react";
import { Card, Container } from "react-bootstrap";

import "../css/Screen1.css";
import priceTags from "../data/priceTags";

const CardTag = ({ tag: { line1, line2, price } }) => (
  <Card className="card-tag">
    <Card.Body className="card-tag-body">
      <p className="card-o">o</p>
      <p className="card-p">
        {line1}
        <br />
        {line2}
      </p>
      <p className="dots">...................................</p>
      <h2>{price}</h2>
      <p className="card-p">грн</p>
    </Card.Body>
  </Card>
);

const Screen1 = () => {
  return (
    <div id="Screen1" className="screen screen1-wrapper">
      <hr className="hr-breaker d-none d-md-block" />

      <Container>
        <div className="phone-container d-none d-md-flex justify-content-end">
          <div className="d-flex flex-column align-items-end screen1-contacts">
            <a href="tel:+380671035848">+38 067 103 5848</a>

            <a href="mailto:likarhelp@gmail.com">likarhelp@gmail.com</a>
          </div>
        </div>

        <div className="screen1-content">
          <div className="screen1-title-container">
            <h1>
              Хірургічна
              <br />
              допомога
            </h1>
            <p>
              дітям та дорослим
              <br />
              вдома, телефоном або у лікарні №3 (каб. 7)
              <br />
              м. Львів, вул. Раппопорта 6
            </p>
          </div>

          <div className="screen1-tags">
            {priceTags.map((tag, index) => (
              <CardTag tag={tag} key={`${tag.line1}-${index}`} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Screen1;
