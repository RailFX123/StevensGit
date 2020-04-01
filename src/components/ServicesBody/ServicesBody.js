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
                <h1>We offer top quality project <span>services</span></h1>
                <h2>01.Super-fast support.</h2>
                <p>Pellentesque lorem dolor, malesuada eget tortor vitae, tristique lacinia lectus. Pellentesque sed accumsan risus, id aliquam nulla. Integer lorem risus, feugiat at mauris malesuada, accumsan pellentesque ipsum. Nunc dapibus, libero ut pulvinar accumsan, tortor nisl iaculis ligula. </p>
                <ol>
                  <li>02.Detailed documentation. </li>
                  <li>03.Clean code.</li>
                  <li>04.Great themes.</li>
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