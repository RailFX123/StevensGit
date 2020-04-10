import React, { Component } from 'react';
import './AboutUs.css';
import Header from '../../components/Header/Header/Header';
import BodyAboutUs from '../../components/BodyAboutUs/BodyAboutUs';
import Footer from '../../components/footer/footer';

class AboutUs extends Component {

  render() {
    return (
      <div>
         <Header></Header>
         <BodyAboutUs></BodyAboutUs>
         <Footer></Footer>
      </div>
    );
  }
}

export default AboutUs;