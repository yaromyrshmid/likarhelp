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
                  <Col md={6}>
                    <p>Лікарня №3<br/>вул.Раппопорта 6<br/>Львів</p><br/>
                    <a href="mailto:likarhelp@gmail.com">likarhelp@gmail.com</a><br/>
                    <a href="tel:+380671035848">+38 067 103 5848</a><br/><br/>
                    <a href="viber://chat?number=+380671035848"><Image className="icon" src={ViberIcon} /></a>
                    <a href="skype:+380671035848?chat"><Image className="icon" src={SkypeIcon} /></a>
                    <a href="tg://resolve?domain=+380671035848"><Image className="icon" src={TelegIcon} /></a>
                  </Col>

                  <Col md={6}>
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