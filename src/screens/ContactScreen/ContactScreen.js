import React, { Component } from 'react';
import './ContactScreen.css';
import Header from '../../components/Header/Header/Header';
import BodyContact from '../../components/bodycontact/bodycontact';
import Footer from '../../components/footer/footer';

class ContactScreen extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <div>
         <Header></Header>
         <BodyContact></BodyContact>
         <Footer></Footer>
      </div>
    );
  }
}

export default ContactScreen;