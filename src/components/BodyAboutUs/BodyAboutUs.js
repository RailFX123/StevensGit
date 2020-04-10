import React, { Component } from 'react';
import './BodyAboutUs.css';
import './imgtextfloat.css';

class BodyAboutUs extends Component {

  render() {
    return (
      <div>
        <section className="AddImagetback">
          <img src={require('./header-bg.jpg')} alt="" height="600px" />

          <div className="centrado"><h2 className="textone">Acerca de nosotros</h2></div>
        </section>

        <section className="testimonials-section spad">
          <div className="testimonials-image-box"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-7 pl-lg-0 offset-lg-5 cta-content">
                <h1>Clients <span>Testimonios</span></h1>
                <div className="qut">reseñas de nuestros clientes</div>
                <div className="testimonials-slider" id="test-slider">
                  <div className="ts-item">
                    <p>Me parece muy eficaz y util para el uso de nuestra empresa para facilitar los sevicios y la busqueda de archivos. </p>
                    <h4>Maria Westminster</h4>
                    <span>Cliente</span>
                  </div>
                  <div className="ts-item">
                    <p>en el area de archivo y sercretaria nos ayudo mucho porque a las secretarias se les hace mas faccil tener un registro de los archivos y poder buscarlos </p>
                    <h4>Maria Westminster</h4>
                    <span>Cliente</span>
                  </div>
                  <div className="ts-item">
                    <p>En nuestro caso nos ayudo a mejorar nuestro trabajo porque muchas veces los archivos fisicos se deterioraban y a la hora de utilizarlos no teniamos ese registro porque por ya no ser legible ya no era utilizable </p>
                    <h4>Maria Westminster</h4>
                    <span>Cliente</span>
                  </div>
                </div>
                <div className="slide-num-holder test-slider" id="snh-2"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="team-section spad">
          <div className="container">
            <div className="section-title mb100">
              <h1>Nuestro Grupo</h1>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="team-member">
                  <img src={require('../../generalimg/team/1.jpg')} alt="" />>
						<div className="member-info">
                    <h2>David Natareno </h2>
                    <p>Senior Architect</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="team-member">
                  <img src={require('../../generalimg/team/2.jpg')} alt="" />>
						<div className="member-info">
                    <h2>Steven Colocho</h2>
                    <p>Senior Architect</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="team-member">
                  <img src={require('../../generalimg/team/3.jpg')} alt="" />>
						<div className="member-info">
                    <h2>Michael Dow</h2>
                    <p>Senior Architect</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="team-member">
                  <img src={require('../../generalimg/team/2.jpg')} alt="" />>
						<div className="member-info">
                    <h2>Erck Fuentes</h2>
                    <p>Senior Architect</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="team-member">
                  <img src={require('../../generalimg/team/2.jpg')} alt="" />>
						<div className="member-info">
                    <h2>Jorge Gudiel</h2>
                    <p>Senior Architect</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="team-member">
                  <img src={require('../../generalimg/team/2.jpg')} alt="" />>
						<div className="member-info">
                    <h2>Oscar Ortiz</h2>
                    <p>Senior Architect</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="team-member">
                  <img src={require('../../generalimg/team/2.jpg')} alt="" />>
						<div className="member-info">
                    <h2>Andrea Melgar</h2>
                    <p>Senior Architect</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="promo-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 promo-text">
                <h1>Necesitas un <span>increible</span> trabajo?</h1>
                <p>No busques mas, somo una empresa dedicada en el desarrollo de software con altos estandares de calidad en el producto final</p>
              </div>
              <div className="col-lg-3 text-lg-right">

              </div>
            </div>
          </div>
        </section>

      </div>
    );
  }
}

export default BodyAboutUs;