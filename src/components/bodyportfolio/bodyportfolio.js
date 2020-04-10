import React, { Component } from 'react';
import './bodyportfolio.css';
import Footer from '../../components/footer/footer';


class bodyportfolio extends Component {


  render() {
    return (
      <div>
        <section className="AddImagetback">
          <img src={require('./header-bg.jpg')} alt="" height="600px" />
          <div className="centrado"><h2 className="textone">Portafolio</h2></div>
        </section>


        <div className="container">
            <div className="gallery">
                <figure className="gallery__item gallery__item--1">
                <img className="grid-item set-bg grid-wide photo" src={require('../../generalimg/portfolio/1.jpg')}></img>
                </figure>
                <figure className="gallery__item gallery__item--2">
                <img className="grid-item set-bg grid-wide photo" src={require('../../generalimg/portfolio/2.jpg')}></img>
                </figure>
                <figure className="gallery__item gallery__item--3">
                <img className="grid-item set-bg grid-wide photo" src={require('../../generalimg/portfolio/3.jpg')}></img>
                </figure>
                <figure className="gallery__item gallery__item--4">
                <img className="grid-item set-bg grid-wide photo" src={require('../../generalimg/portfolio/4.jpg')}></img>
                </figure>
                <figure className="gallery__item gallery__item--5">
                <img className="grid-item set-bg grid-wide photo" src={require('../../generalimg/portfolio/5.jpg')}></img>
                </figure>
                <figure className="gallery__item gallery__item--6">
                  <img className="grid-item set-bg grid-wide photo" src={require('../../generalimg/portfolio/6.jpg')}></img>
                </figure>
            </div>
        </div>
        <Footer></Footer>

      </div>
    );
  }
}

export default bodyportfolio;