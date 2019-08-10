import React from 'react';
import { Row, Col, Image, Container } from 'react-bootstrap';
import './Screen3.css';

function Screen3() {
  return (
    <div className="section bg3">
      <Container>
        <Row>
          <Col md={{span: 10, offset: 2}}>
            <hr className="hr-breaker"/>
            <Row className="row-top">
            <Col md={2}>
              <h1 className="slide-number">02</h1>
            </Col>
            <Col md={10}>
              <h2>Наші<br/> послуги</h2>
              <Row>
                <Col md={6}>
                <h3>Профілактичний огляд</h3>
                <h3>Хірургія</h3>
                <p>Лікування ран шкіри (накладання швів та скобок)</p>
                <p>Мокне пупок, омфаліт</p>
                <p>Гнійні процеси  (фурункули, абсцеси,  гідраденіти)</p>
                <p>Врослий ніготь (консервативне та оперативне лікування)</p>
                <p>Видалення новоутворів (ліпоми, атероми, фіброми, мілії, папіломи, бородавоки, контагіозний молюск, кондиломи, халязіони, телеагіоектазії, невуси, гіперкератози, ембріональні придатки)</p>
                <p>Коротка вуздечка язика (підрізання, або ні)</p>
                </Col>
                <Col md={6}>
                <p>Діагностика пахових, пупкових кил та кил білої лінії</p>
                <p>Спостереження та лікування гемангіом</p>
                <p>Лікування синдрому хронічних закрепів</p>
                <p>Пірсінг (куди ж без нього) також усунення ускладнень (запалення, нагноєння)</p>
                <p>Видалення інородних тіл (занози, дрібні іграшки з носа, вуха, тощо)</p>
                <p>Ведення пацієнтів після операцій</p>
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

export default Screen3;