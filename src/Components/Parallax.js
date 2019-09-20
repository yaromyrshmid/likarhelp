import React from 'react';

import { Navigation } from './Navigation';
import Screen1 from './Screen1'; 
import Screen2 from './Screen2';
import Screen4 from './Screen4';
import '../css/Parallax.css';

class Parallax extends React.Component {
  // componentDidMount() {
  //   function scrollTo() {
  //     const links = document.querySelectorAll('.scroll');
  //     links.forEach(each => (each.onclick = scrollAnchors));
  //   }

  //   scrollTo();
    
  //   function scrollAnchors(e, respond = null) {
  //     const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
  //     e.preventDefault();
  //     var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
  //     const targetAnchor = document.querySelector(targetID);
  //     if (!targetAnchor) return;
  //     const originalTop = distanceToTop(targetAnchor);
  //     window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
  //     const checkIfDone = setInterval(function() {
  //       const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
  //       if (distanceToTop(targetAnchor) === 0 || atBottom) {
  //         targetAnchor.tabIndex = '-1';
  //         targetAnchor.focus();
  //         window.history.pushState('', '', targetID);
  //         clearInterval(checkIfDone);
  //       }
  //     }, 100);
  //   }
  // }

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