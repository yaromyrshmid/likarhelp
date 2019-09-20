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
                  <Col lg={4}>
                    <p>Лікарня №3<br/>вул.Раппопорта 6<br/>Львів</p><br/>
                    <a href="mailto:likarhelp@gmail.com">likarhelp@gmail.com</a><br/>
                    <a href="tel:+380671035848">+38 067 103 5848</a><br/><br/>
                    <a href="viber://add?number=+380671035848"><Image className="icon" src={ViberIcon} /></a>
                    <a href="viber://add?number=+380671035848"><Image className="icon" src={SkypeIcon} /></a>
                    <a href="viber://add?number=+380671035848"><Image className="icon" src={TelegIcon} /></a>
                  </Col>

                  <Col sm={{span: 10, offset: 2}} lg={{span: 5, offset: 3}} xl={{span: 4, offset: 4}}>
                    <Image src={familyLogo} className="familyLogo" alt='family logo' />
                    <h3 className="text-right">Наша місія:</h3>
                    <p className="text-right">Медичний сервіс. Його так бракує медицині сьогодення. Ми створюємо просте і якісне надання послуг людям. Це необхідно і зручно як пацієнтам, так і лікарям.</p>
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