import React, { Component } from 'react';
import Map from '../map/map';
import './bodycontact.css';


class bodycontact extends Component {



  render() {
    return (
      <div>
        <section className="AddImagetback">
          <img src={require('../../generalimg/header-bg-2.jpg')} alt="" height="600px" />
          <div className="centrado"><h2 className="textone">Contactanos</h2></div>
        </section>

        <section className="page-section pt100">
          <div className="container pb100">
            <div className="section-title pt-5">
              <h1>Contactenos</h1>
            </div>
            <div className="row">
              <div className="col-lg-3 contact-info mb-5 mb-lg-0">
                <p>Dirección: 3ra. Calle 18-48,Jutiapa. </p>
                <p>Teléfono: +502 54723883</p>
                <p>Email: nuestraempresa@gmail.com</p>
                <div className="cf-social">
                  <a href="#"><i className="fa fa-google-plus"></i></a>
                  <a href="#"><i className="fa fa-pinterest"></i></a>
                  <a href="#"><i className="fa fa-facebook"></i></a>
                  <a href="#"><i className="fa fa-twitter"></i></a>
                </div>
              </div>
              <div className="col-lg-9">
                <form className="contact-form">
                  <input type="text" placeholder="Ingrese su numbre" />
                  <input type="text" placeholder="Ingrese su Correo Electronico" />
                  <textarea placeholder="Mensaje ..."></textarea>
                  <button className="site-btn sb-dark">Send</button>
                </form>
              </div>
            </div>
          </div>

        </section>

        <Map></Map>
      </div>
    );
  }
}


export default bodycontact;

