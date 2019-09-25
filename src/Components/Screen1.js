import React from 'react';
import CostaXs from '../images/costa-screen1-xs.png';
import CostaSm from '../images/costa-screen1-sm.png';
import CostaMd from '../images/costa-screen1-md.png';
import { Row, Image, Col, Card, Container } from 'react-bootstrap';
import '../css/Screen1.css';


function Screen1() {
  const cardTag = (
    <Card className="card-tag">
      <Card.Body className="card-tag-body">
        <p className="card-o">o</p>  
        <p className="card-p">Консультація<br/>
        вдома</p>
        <p className="dots">...................................</p>
        <h2>200</h2>
        <p className="card-p">грн</p>
      </Card.Body>
     </Card>
  )

  return (
    <div id="Screen1" className="section bg1">
    <Container>
    <Row>
      <Col md={{span: 10, offset: 2}}>

        <hr className="hr-breaker d-none d-md-flex"/>
        <Row className="flex-row-reverse d-none d-md-flex">
          <a className="phoneNum" href="tel:+380671035848">+38 067 103 5848</a>
        </Row>

        <Row>
          <Col md={4} lg={5} className="d-none d-md-block">
            <Image src={CostaMd} className="costa d-none d-md-block" alt="Costa Screen1"/> 
          </Col>

          <Col xs={12} md={8} lg={7}>
            <Row className="flex-row-reverse d-none d-md-flex">
              {cardTag}
            </Row>

            <Row>
              <Col xs={12}>
                <div className="title">
                  <h1>Хірургічна<br/>допомога</h1>
                  <p>дітям та дорослим<br/>
                  вдома, телефоном або у лікарні №3<br/>
                  м. Львів, вул. Раппопорта 6   
                  </p>
                </div>
              </Col>
            </Row>

            <Row className="d-inherit d-md-none">
              <Col xs={4}>
                {cardTag}
              </Col>
              <Col xs={6}>
                <Image src={CostaXs} className="costa d-block d-sm-none" alt="Costa Screen1"/>
                <Image src={CostaSm} className="costa d-none d-sm-block" alt="Costa Screen1"/> 
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
