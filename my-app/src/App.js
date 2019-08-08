import React from 'react';
import Navigation from './Components/Navigation';
import Screen1 from './Components/Screen1'; 
import Screen2 from './Components/Screen2';
import { Container, Row} from 'react-bootstrap';
import './App.css';

function App() {
  return(
    <div>
      <Container>
       <Navigation />
      <Container>
        <Screen1 />
      </Container>
      <Container>
      <Row>
        <Screen2 />
      </Row>
      </Container>
      </Container>
  </div>
  );
}

export default App;