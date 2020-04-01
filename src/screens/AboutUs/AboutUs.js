import React, { Component } from 'react';
import './AboutUs.css';
import Header from '../../components/Header/Header/Header';
import BodyAboutUs from '../../components/BodyAboutUs/BodyAboutUs';

class AboutUs extends Component {

  render() {
    return (
      <div>
         <Header></Header>
         <BodyAboutUs></BodyAboutUs>
      </div>
    );
  }
}

export default AboutUs;