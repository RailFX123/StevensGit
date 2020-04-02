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
				<h1>Services</h1>
			</div>
			<div className="row">
				<div className="col-lg-4 col-md-6">
					<div className="service-box">
						<div className="sb-icon">
							<div className="sb-img-icon">
								<img src={require("../../generalimg/icon/dark/1.png")} alt=""/>
                
							</div>
						</div>
						<h3>Plans and Projects</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed dui eget lorem tincidunt.</p>
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
						<h3>Conceptual Architecture</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed dui eget lorem tincidunt.</p>
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
						<h3>Apartment Buildings</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed dui eget lorem tincidunt.</p>
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
						<h3>Skyscrapers Buildings</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed dui eget lorem tincidunt.</p>
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
						<h3>Documentation</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed dui eget lorem tincidunt.</p>
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
						<h3>Restauration Projects</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed dui eget lorem tincidunt.</p>
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