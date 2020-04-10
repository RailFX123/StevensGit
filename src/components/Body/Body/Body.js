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
                <h2 className="sp-title">Nosotros somos una arquitectura creativa<span>Archivado</span></h2>
                <p>Nos caracterizamos por ser una empresa emprendedora, creadora que velamos por la necesidad de las empresas por la importancia de sus documentos y nos preocupamos porque usted tennga todo registrado virtualmente para no tener una perdida de documentso importantes y legales que usted pueda utilizar. </p>
                <a href="#" className="site-btn sb-dark">Vea mas de nosotros</a>
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
              <h2>Servicios</h2>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="service-box">
                  <div className="sb-icon">
                    <div className="sb-img-icon">
                      <img src="img/icon/dark/1.png" alt="" />>
							</div>
                  </div>
                  <h3>Consultorías en TI</h3>
                  <p>Diseño de Arquitectura de aplicaciones, servidores y bases de datos, procesos de negocio que ayuden a la definición de requerimientos para TI.</p>
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
                  <h3>Administración de proyectos</h3>
                  <p>Gestión de proyectos por medio de Project Managers que coordinen las diferentes áreas interdisciplinarias para el logro de objetivos en tiempo, costo y calidad.</p>
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
                  <h3>Outsourcing de Aplicaciones</h3>
                  <p>Se desarrolla mediante un acuerdo de Colaboración donde se delega la gestión, el mantenimiento y la mejora de aplicaciones, cubriendo el ciclo de vida completo del software.</p>
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
                  <h3>Desarrollo a la medida</h3>
                  <p>El Cliente contrata un servicio puntual, con alcance, plazo y costos previamente definidos.</p>
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
                  <h3>Diagnostico de Aplicaciones</h3>
                  <p>Revisar y detectar errores en el código para optimizar el consumo de los recursos Soporte Técnico.</p>
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
                  <h3>Capacitaciones</h3>
                  <p>Ofrecer a nuestros clientes capacitaciones técnicas, transferencia de conocimientos.</p>
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
                <h2 className="sp-title">Atevete a actualizarte en la documentación de <span>archivos</span></h2>
                <p>Nada como simplificar la archivacion de los documentos de tu empresa para que sea mejor el manejo y evitar la fatiga de la busqueda y perdida de estos documentos. </p>
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
                  <p>Años de Experiencia</p>
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