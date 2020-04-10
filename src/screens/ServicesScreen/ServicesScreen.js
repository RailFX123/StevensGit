import React, { Component } from 'react';
import './ServicesScreen.css';
import Header from '../../components/Header/Header/Header';
import Body from '../../components/ServicesBody/ServicesBody';
import Footer from '../../components/footer/footer';
class ServicesScreen extends Component {


  render() {
    return (
      <div>
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
      </div>
    );
  }


}

export default ServicesScreen;