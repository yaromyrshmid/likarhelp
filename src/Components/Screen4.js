import React from 'react';
import { Row, Col, Image, Container } from 'react-bootstrap';

import ViberIcon from '../images/viber-icon.svg';
import SkypeIcon from '../images/skype-icon.svg';
import TelegIcon from '../images/teleg-icon.svg';
import familyLogo from '../images/family_logo.svg';
import '../css/Screens.css';
import '../css/Screen4.css';

function Screen4() {
  return (
    <div id="Screen4" className="section bg4">
      <Container>
        <Row>
          <Col md={{span: 10, offset: 2}}>
            <Row className="row-top-contacts">
              <Col md={{span:10, offset:2}}>
                <h2>Контакти</h2>
                <Row>
                  <Col md={6} xl={8}>
                    <Row>
                      <Col xs={12} xl={6}>
                        <a href="https://www.google.com/maps/place/Ambulatoriya+Simeynoyi+Medytsyny/@49.8448226,24.0179577,18z/data=!3m1!4b1!4m5!3m4!1s0x473add75b3c5b703:0xf9983c296775dc6f!8m2!3d49.8448209!4d24.019052" target="_blank" rel="noopener noreferrer">
                          Лікарня №3<br/>
                          вул.Раппопорта 6<br/>
                          Львів</a>
                          <br/><br/>                    
                      </Col>
                      <Col xs={12} xl={6}>
                        <a href="tel:+380671035848">+38 067 103 5848</a>
                        <br/>
                        <a href="mailto:likarhelp@gmail.com">likarhelp@gmail.com</a>
                      </Col>
                    </Row>

                    {/* <a href="viber://chat?number=+380671035848"><Image className="icon" src={ViberIcon} /></a>
                    <a href="skype:+380671035848?chat"><Image className="icon" src={SkypeIcon} /></a>
                    <a href="tg://resolve?domain=+380671035848"><Image className="icon" src={TelegIcon} /></a> */}
                  </Col>

                  <Col md={6} xl={4}>
                    <Image src={familyLogo} className="familyLogo" alt='family logo' />
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

export default Screen4;