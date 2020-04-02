import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './Header.css';
import '../img/logo.png';

class Header extends Component {
	render() {
		return (
			<div>
				<header className="header-area">


					<div className="phone-number">+502 54723883</div>


					<nav class="navbar navbar-expand-lg .navbar-dark bg-dark">
						<Link to="/">
							<img src={require('../img/logo.png')} alt=""></img>
						</Link>
						<div class="collapse navbar-collapse" id="navbarText">
							<ul class="navbar-nav mr-auto">
								<li class="nav-item active">
									<Link to="/">	<li className="active"><h4 className="item">Home</h4></li></Link>
								</li>
								<li class="nav-item">
									<Link to="/about"><li><h4 className="item">About us</h4></li></Link>
								</li>
								<li class="nav-item">
									<Link to="/services"><li><h4 className="item">Services</h4></li></Link>
								</li>
								<li class="nav-item">
									<Link to="/portfolio"><li><h4 className="item">Portfolio</h4></li></Link>
								</li>
								<li class="nav-item">
									<Link to="/contact"><li><h4 className="item">Contact</h4></li></Link>
								</li>
							</ul>

						</div>
					</nav>

				</header>
			</div>
		);
	}
}




export default Header;