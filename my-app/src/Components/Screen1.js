import React from 'react';
import Costa from '../images/costa-screen1.png'
import { Row, Image, Col, Card } from 'react-bootstrap';
import './Screen1.css';

function Screen1() {
  return (
    <Row>
      <Col md={2}>
      </Col>
      
      <Col md={10}>
        <hr className="hr-breaker"/>
        <Row className="phoneRow">
          <a className="phoneNum" href="tel:+380671035848">+38 067 103 5848</a>
        </Row>
        <Row>
          <Col xs={5}>
            <Image src={Costa} className="costa" alt="Costa Screen1" /> 
          </Col>
          <Col xs={7}>
            <Row>
            <Col xs={{ span: 4, offset: 8 }}>
              <Card>
                <Card.Body>
                <div className="circle"></div>
                  <Card.Text>
                  Консультація<br/>
                  у вас вдома
                  </Card.Text>
                  </Card.Body>
                  <div className="dots">
                    <p>..........................</p>
                  </div>
                  <Card.Body>
                  <Card.Title>
                    <h2>200</h2>
                  </Card.Title>
                  <Card.Text>
                  грн
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            </Row>
            <Row>
              <Col>
                <div className="title">
                  <h1>Хірургічна<br/>допомога</h1>
                  <p>допомога дітям та дорослим<br/>
                  вдома, телефоном або у лікарні №3<br/>
                  м.Львів вул.Раппопорта 6   
                  </p>
                </div>
            </Col>
            </Row>
          </Col>
          
        </Row>

      </Col>
    </Row>
  )
}

export default Screen1;
