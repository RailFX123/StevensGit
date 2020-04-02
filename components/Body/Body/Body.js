import React, { Component } from 'react';
import './Body.css';
import Logo from "../../../generalimg/bg.jpg";

class Body extends Component {


  render() {
    return (
      <div>

        <section className="hero-section">
          <div className="left-bar">
            <div className="left-bar-content">
              <div className="social-links">
                <a href="#"><i className="fa fa-pinterest"></i></a>
                <a href="#"><i className="fa fa-linkedin"></i></a>
                <a href="#"><i className="fa fa-instagram"></i></a>
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
              </div>
            </div>
          </div>
          <div className="hero-slider">
            <div >
              <img className="hero-slide-item set-bg" src={Logo} alt=""/>
              
            
            </div>
            <div id="hero-slide-item set-bg" data-setbg="../../../generalimg/bg.jpg">
              <div className="slide-inner">
                <div className="slide-content">
                  <h2>Minimalistic Architecture and more</h2>
                  <a href="#" className="site-btn sb-light">See Project</a>
                </div>
              </div>
            </div>
          </div>
          <div className="slide-num-holder" id="snh-1"></div>
          <div className="hero-right-text">architecture</div>
        </section>

        <section className="intro-section pt100 pb50">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 intro-text mb-5 mb-lg-0">
                <h2 className="sp-title">We are a creative Architecture<span>Studio</span></h2>
                <p>Pellentesque lorem dolor, malesuada eget tortor vitae, tristique lacinia lectus. Pellentesque sed accumsan risus, id aliquam nulla. Integer lorem risus, feugiat at mauris malesuada, accumsan pellentesque ipsum. Nunc dapibus, libero ut pulvinar accumsan, tortor nisl iaculis ligula. Curabitur finibus dolor vel lectus pretium interdum a eget ante. Morbi rhoncus feugiat imperdiet. Curabitur non maximus leo. Nulla in ipsum sed magna egestas bibendum. Integer in sem sagittis, commodo mi sit amet, commodo nibh. Suspendisse potenti. Aliquam erat volutpat. </p>
                <a href="#" className="site-btn sb-dark">See Project</a>
              </div>
              <div className="col-lg-5 pt-4">
                <img src="../../../generalimg/intro.png" alt="" />>
				      </div>
            </div>
          </div>
        </section>

        <section className="service-section spad">
          <div className="container">
            <div className="section-title">
              <h2>Services</h2>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="service-box">
                  <div className="sb-icon">
                    <div className="sb-img-icon">
                      <img src="img/icon/dark/1.png" alt="" />>
							</div>
                  </div>
                  <h3>Planes y Proyectos</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed dui eget lorem tincidunt.</p>
                  <a href="#" className="readmore">READ MORE</a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-box">
                  <div className="sb-icon">
                    <div className="sb-img-icon">
                      <img src="img/icon/dark/2.png" alt="" />
                    </div>
                  </div>
                  <h3>Arquitectura conceptual</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed dui eget lorem tincidunt.</p>
                  <a href="#" className="readmore">READ MORE</a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-box">
                  <div className="sb-icon">
                    <div className="sb-img-icon">
                      <img src="img/icon/dark/3.png" alt="" />
                    </div>
                  </div>
                  <h3>Empresas con las que trabajamos</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed dui eget lorem tincidunt.</p>
                  <a href="#" className="readmore">READ MORE</a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-box">
                  <div className="sb-icon">
                    <div className="sb-img-icon">
                      <img src="img/icon/dark/4.png" alt="" />
                    </div>
                  </div>
                  <h3>Skyscrapers Buildings</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed dui eget lorem tincidunt.</p>
                  <a href="#" className="readmore">READ MORE</a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-box">
                  <div className="sb-icon">
                    <div className="sb-img-icon">
                      <img src="img/icon/dark/5.png" alt="" />
                    </div>
                  </div>
                  <h3>Documentation</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed dui eget lorem tincidunt.</p>
                  <a href="#" className="readmore">READ MORE</a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-box">
                  <div className="sb-icon">
                    <div className="sb-img-icon">
                      <img src="img/icon/dark/6.png" alt="" />
                    </div>
                  </div>
                  <h3>Restauration Projects</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed dui eget lorem tincidunt.</p>
                  <a href="#" className="readmore">READ MORE</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section pt100 pb50">
          <div className="cta-image-box"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-7 pl-lg-0 offset-lg-5 cta-content">
                <h2 className="sp-title">Dare to dream of a modern <span>home</span></h2>
                <p>Pellentesque lorem dolor, malesuada eget tortor vitae, tristique lacinia lectus. Pellentesque sed accumsan risus, id aliquam nulla. Integer lorem risus, feugiat at mauris malesuada, accumsan pellentesque ipsum. Nunc dapibus, libero ut pulvinar accumsan, tortor nisl iaculis ligula. Curabitur finibus dolor vel lectus pretium interdum a eget ante. </p>
                <div className="cta-icons">
                  <div className="cta-img-icon">
                    <img src="../../../generalimg/icon/light/1.png" alt="" />
                  </div>
                  <div className="cta-img-icon">
                    <img src="../../../generalimg/icon/light/2.png" alt="" />>
					      	</div>
                  <div className="cta-img-icon">
                    <img src="../../../generalimg/icon/light/3.png" alt="" />>
						       </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="milestones-section spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="milestone">
                  <h2>14</h2>
                  <p>Years of Experience</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="milestone">
                  <h2>237</h2>
                  <p>Projects Taken</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="milestone">
                  <h2>11k</h2>
                  <p>Twitter Followers</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="milestone">
                  <h2>12</h2>
                  <p>Awards Won</p>
                </div>
              </div>
            </div>
          </div>
        </section>


      </div>

    );
  }
}

export default Body;