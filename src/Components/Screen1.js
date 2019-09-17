import React from 'react';
import Costa from '../images/costa-screen1.png';
import { Row, Image, Col, Card, Container } from 'react-bootstrap';
import '../css/Screen1.css';


function Screen1() {
  return (
    <div id="Screen1" className="section bg1">
      <Container>
      <Row>
      <Col md={{span: 10, offset: 2}}>
        <hr className="hr-breaker"/>
        <Row className="flex-row-reverse">
          <a className="phoneNum" href="tel:+380671035848">+38 067 103 5848</a>
        </Row>
        <Row>
          <Col xs={5}>
            <Image src={Costa} className="costa" alt="Costa Screen1"/> 
          </Col>
          <Col xs={7}>
            <Row className="flex-row-reverse">
              <Card className="card-tag">
                <Card.Body className="card-tag-body">
                  <p>Консультація<br/>
                  у вас вдома</p>
                  <p className="dots">...................................</p>
                  <h2>200</h2>
                  <p>грн</p>
                </Card.Body>
              </Card>
            </Row>
            <Row>
              <Col>
                <div className="title">
                  <h1>Хірургічна<br/>допомога</h1>
                  <p>дітям та дорослим<br/>
                  вдома, телефоном або у лікарні №3<br/>
                  м. Львів, вул. Раппопорта 6   
                  </p>
                </div>
            </Col>
            </Row>
          </Col>
          
        </Row>

      </Col>
    </Row>
    </Container>
    </div>
  )
}

export default Screen1;
