import React, { Component } from 'react';
import './Home.css';
import Header from '../../components/Header/Header/Header';
import Body from '../../components/Body/Body/Body';


class Home extends Component {

  render() {
    return (
      <div>
        <Header></Header>
        <Body></Body>

      </div>
    );
  }
}

export default Home;