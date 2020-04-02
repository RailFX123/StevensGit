import React, { Component } from 'react';
import './ServicesBody.css';

class ServicesBody extends Component {


  render() {
    return (
      <div>
        <section className="AddImagetback">
          <img src={require('./header-bg.jpg')} alt="" height="600px" />

          <div className="centrado"><h2 className="textone">Servicios</h2></div>


        </section>
        <section className="intro-section spad">
          <div class="container">
            <div class="row">
              <div class="col-lg-5">
                <div class="service-slider">

                  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src={require('../../generalimg/service/1.jpg')} alt="" />
                      </div>
                      <div class="carousel-item">
                        <img src={require('../../generalimg/service/2.jpg')} alt="" />
                      </div>
                      <div class="carousel-item">
                        <img src={require('../../generalimg/service/3.jpg')} alt="" />
                      </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="sr-only">Next</span>
                    </a>
                  </div>



                </div>
              </div>
              <div class="col-lg-7 service-text">
                <h1>Ofrecemos proyectos de buena calidad <span>Servicios</span></h1>
                <h2>01.Soporte rápido.</h2>
                <p>Nos caracterizamos por brindar soporte eficaz y rapido a sus sistemas para que pueda trabajar en ella lo mas pronto posible y no interrumpir su trabajo </p>
                <ol>
                  <h2>02.Documentación detallada. </h2>
				  <p>Ofrecemos documentacion del sistema para que el personal de IT puedan manejar errores cuando se presenten y tener la posibilidad de saber la funcion de cada apartado del sistema </p>
                  <h2>03.Visualización Gráfica entendible.</h2>
				  <p>Para poder ser mas entendible para las peronas se implementara selecciones graficas para que no e cueste a las personas y se amas interesante el usarlo </p>
                </ol>
              </div>
            </div>
          </div>
        </section>
     
        <section className="service-section spad">
		<div className="container">
			<div className="section-title">
				<h1>Servicios</h1>
			</div>
			<div className="row">
				<div className="col-lg-4 col-md-6">
					<div className="service-box">
						<div className="sb-icon">
							<div className="sb-img-icon">
								<img src={require("../../generalimg/icon/dark/1.png")} alt=""/>
                
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
              <img src={require("../../generalimg/icon/dark/2.png")} alt=""/>
							</div>
						</div>
						<h3>Administración de proyectos</h3>
						<p>Gestión de proyectos por medio de Project Managers que coordinen las diferentes áreas interdisciplinarias para el logro de objetivos en tiempo, costo y calidad.</p>
						<a href="#" className="readmore">READ MORE</a>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="service-box">
						<div className="sb-aicon">
							<div className="sb-img-icon">
              <img src={require("../../generalimg/icon/dark/3.png")} alt=""/>
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
              <img src={require("../../generalimg/icon/dark/4.png")} alt=""/>
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
              <img src={require("../../generalimg/icon/dark/5.png")} alt=""/>
							</div>
						</div>
						<h3>Diagnostico de Aplicaciones</h3>
						<p>Revisar y detectar errores en el código para optimizar el consumo de los recursos Soporte Técnico .</p>
						<a href="#" className="readmore">READ MORE</a>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="service-box">
						<div className="sb-icon">
							<div className="sb-img-icon">
              <img src={require("../../generalimg/icon/dark/6.png")} alt=""/>
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
      </div>
    );
  }
}

export default ServicesBody;