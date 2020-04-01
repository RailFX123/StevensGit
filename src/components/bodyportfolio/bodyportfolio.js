import React, { Component } from 'react';
import './bodyportfolio.css';


class bodyportfolio extends Component {


  render() {
    return (
      <div>
        <section className="AddImagetback">
          <img src={require('./header-bg.jpg')} alt="" height="600px" />
          <div className="centrado"><h2 className="textone">Portafolio</h2></div>
        </section>

        <div className="page-section spad">
          <div className="container">
            <ul className="portfolio-filter">
              <li className="filter" data-filter="*">All</li>
              <li className="filter" data-filter=".photo">Photography</li>
              <li className="filter" data-filter=".design">Design</li>
              <li className="filter" data-filter=".iden">Identity</li>
              <li className="filter" data-filter=".corp">Corporate</li>
              <li className="filter" data-filter=".uxui">UI/UX</li>
            </ul>
          </div>
        </div>

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

      </div>
    );
  }
}

export default bodyportfolio;