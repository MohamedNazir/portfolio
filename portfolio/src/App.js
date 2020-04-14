import React from 'react';
import {Component} from 'react';
import HeaderComponents from './Components/HeaderComponents'
import FooterComponents from './Components/FooterComponents'

class App extends Component {
  render(){
  return (
    <div className="">
      <HeaderComponents/>
      <FooterComponents/>
    </div>
  );
  }
}

export default App;
