import React from 'react';
import Navigation from './Navigation';
import Screen1 from './Screen1'; 
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen4 from './Screen4';
import { Container } from 'react-bootstrap';
import './Parallax.css';

function Parallax() {
  return(  
    <div>
    <Container className="navbar-container">
      <Navigation />
    </Container>
    <div className="wrapper">

      <Screen1/>
      <Screen2/>
      <Screen3/>
      <Screen4/>
  </div>
  </div>
  );
}

export default Parallax;