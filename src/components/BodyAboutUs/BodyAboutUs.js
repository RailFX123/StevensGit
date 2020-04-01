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
                <h1>Clients <span>testimonials</span></h1>
                <div className="qut">â€œ</div>
                <div className="testimonials-slider" id="test-slider">
                  <div className="ts-item">
                    <p>Pellentesque lorem dolor, malesuada eget tortor vitae, tristique lacinia lectus. Pellentesque sed accumsan risus, id aliquam nulla. Integer lorem risus, feugiat at mauris malesuada, accumsan pellentesque ipsum. Nunc dapibus, libero ut pulvinar accumsan, tortor nisl iaculis ligula. Curabitur finibus dolor vel lectus pretium interdum a eget ante. </p>
                    <h4>Maria Westminster</h4>
                    <span>Client</span>
                  </div>
                  <div className="ts-item">
                    <p>Pellentesque lorem dolor, malesuada eget tortor vitae, tristique lacinia lectus. Pellentesque sed accumsan risus, id aliquam nulla. Integer lorem risus, feugiat at mauris malesuada, accumsan pellentesque ipsum. Nunc dapibus, libero ut pulvinar accumsan, tortor nisl iaculis ligula. Curabitur finibus dolor vel lectus pretium interdum a eget ante. </p>
                    <h4>Maria Westminster</h4>
                    <span>Client</span>
                  </div>
                  <div className="ts-item">
                    <p>Pellentesque lorem dolor, malesuada eget tortor vitae, tristique lacinia lectus. Pellentesque sed accumsan risus, id aliquam nulla. Integer lorem risus, feugiat at mauris malesuada, accumsan pellentesque ipsum. Nunc dapibus, libero ut pulvinar accumsan, tortor nisl iaculis ligula. Curabitur finibus dolor vel lectus pretium interdum a eget ante. </p>
                    <h4>Maria Westminster</h4>
                    <span>Client</span>
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
              <h1>The Team</h1>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="team-member">
                  <img src={require('../../generalimg/team/1.jpg')} alt="" />>
						<div className="member-info">
                    <h2>Jack Smith</h2>
                    <p>Senior Architect</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="team-member">
                  <img src={require('../../generalimg/team/2.jpg')} alt="" />>
						<div className="member-info">
                    <h2>Lili Jameson</h2>
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