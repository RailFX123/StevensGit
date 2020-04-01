import React, { Component } from 'react';
import './ServicesScreen.css';
import Header from '../../components/Header/Header/Header';
import Body from '../../components/ServicesBody/ServicesBody';
class ServicesScreen extends Component {


  render() {
    return (
      <div>
        <Header></Header>
        <Body></Body>
      </div>
    );
  }


}

export default ServicesScreen;