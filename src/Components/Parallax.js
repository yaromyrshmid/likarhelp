import React from 'react';

import { Navigation } from './Navigation';
import Screen1 from './Screen1'; 
import Screen2 from './Screen2';
import Screen4 from './Screen4';
import '../css/Parallax.css';

class Parallax extends React.Component {

  render() {
    return(  
      <div>
          <Navigation />
        <div className="wrapper">
          <Screen1/>
          <Screen2/>
          <Screen4/>
        </div>
      </div>
    );
  }
}

export default Parallax;