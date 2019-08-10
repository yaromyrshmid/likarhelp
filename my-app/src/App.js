import React, { Component } from 'react';
import Parallax from './Components/Parallax';
import './App.css';

class App extends Component {

  componentDidMount() {

    window.addEventListener('scroll', this.handleScroll, true);
    
    
  }
  

  
  handleScroll = () => {
    // const navLinks = document.querySelectorAll('.nav-link');
    // console.log(window.style.top);
    // console.log('scrolling');
    
  }


  render() {
    
    return(
      <Parallax />
    );
  }

  // componentDidMount() {
  //   console.log('did mount');
  //   const navLinks = document.querySelectorAll('.nav-link');
  //   navLinks.forEach((el) => {
  //     console.log(el.getBoundingClientRect());
  //   })
  //   console.log(window);

  //   window.addEventListener('scroll', ()=> {
  //     console.log('srrrrrrll')
  //   })

  //   window.scroll(()=> {
  //     console.log('scrolled');
  //   })

  // }  
}

export default App;