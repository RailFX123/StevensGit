import React, { Component } from 'react';
import './portfolioscreens.css';
import Header from '../../components/Header/Header/Header';
import BodyPortfolio from '../../components/bodyportfolio/bodyportfolio'

class portfolioscreens extends Component {


  render() {
    return (
      <div>
        <Header></Header>
        <BodyPortfolio></BodyPortfolio>
      </div>
    );
  }
}

export default portfolioscreens;