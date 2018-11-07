import React, { Component } from 'react';
import {Helmet} from 'react-helmet';

import Layout from './hoc/Layout/Layout';
import Aux from './hoc/Auxiliar/Auxiliar';

class App extends Component {
  render() {
    return (
      
      <div className="site-content">
        <header className="site-header">
          <div className="container">
            <a href="#" className="branding">
              <img src="images/logo.png" alt="" className="logo"/>
              <h1 className="site-title">True Church</h1>
            </a>

            <div className="main-navigation">
              <button className="menu-toggle"><i className="fa fa-bars"></i> Menu</button>
              <ul className="menu">
                <li className="menu-item current-menu-item"><a href="index.html">Homepage <small>Lorem ipsum</small></a></li>
                <li className="menu-item"><a href="#">Pastors <small>Cupidatat non proident</small></a></li>
                <li className="menu-item"><a href="seremons.html">Seremons <small>Laboris nisi aliquip</small></a></li>
                <li className="menu-item"><a href="events.html">Events <small>Sunt in culpa</small></a></li>
                <li className="menu-item"><a href="families.html">Families <small>Aute irure</small></a></li>
                <li className="menu-item"><a href="#">Contact <small>lorem ipsum</small></a></li>
              </ul>
            </div>

            <div className="mobile-navigation"></div>
          </div>
        </header>

			<div className="hero">
				<div className="slides">
					<li data-bg-image="images/slide-1.jpg">
						<div className="container">
							<div className="slide-content">
								<small className="slide-subtitle">True Church</small>
								<h2 className="slide-title">Place with a real love</h2>

								<a href="#" className="button">See our families</a>
							</div>
						</div>
					</li>

					<li data-bg-image="images/slide-1.jpg">
						<div className="container">
							<div className="slide-content">
								<small className="slide-subtitle">True Church</small>
								<h2 className="slide-title">Place with a real love</h2>

								<a href="#" className="button">See our families</a>
							</div>
						</div>
					</li>
				</div>
			</div>

			<main className="main-content">
				<div className="fullwidth-block">
					<div className="container">
						<h2 className="section-title">Recent news</h2>

						<div className="row">
							<div className="col-md-3 col-sm-6">
								<div className="news">
									<img className="news-image" src="images/news-thumb-1.jpg"></img>
									<h3 className="news-title"><a href="#">laboris nisi ut aliquip</a></h3>
									<small className="date"><i className="fa fa-calendar"></i>24 mar 2014</small>
								</div>
							</div>
							<div className="col-md-3 col-sm-6">
								<div className="news">
									<img className="news-image" src="images/news-thumb-2.jpg"></img>
									<h3 className="news-title"><a href="#">laboris nisi ut aliquip</a></h3>
									<small className="date"><i className="fa fa-calendar"></i>24 mar 2014</small>
								</div>
							</div>
							<div className="col-md-3 col-sm-6">
								<div className="news">
									<img className="news-image" src="images/news-thumb-3.jpg"></img>
									<h3 className="news-title"><a href="#">laboris nisi ut aliquip</a></h3>
									<small className="date"><i className="fa fa-calendar"></i>24 mar 2014</small>
								</div>
							</div>
							<div className="col-md-3 col-sm-6">
								<div className="news">
									<img className="news-image" src="images/news-thumb-4.jpg"></img>
									<h3 className="news-title"><a href="#">laboris nisi ut aliquip</a></h3>
									<small className="date"><i className="fa fa-calendar"></i>24 mar 2014</small>
								</div>
							</div>
						</div>
					</div> 
				</div> 

				<div className="fullwidth-block">
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								<h2 className="section-title">Upcoming events</h2>
								<ul className="event-list">
									<li>
										<a href="#">
											<h3 className="event-title">africa mission trip</h3>
											<span className="event-meta">
												<span><i className="fa fa-calendar"></i>30 mar 2014</span>
												<span><i className="fa fa-map-marker"></i> Africa</span>

											</span>
										</a>
									</li>
									<li>
										<a href="#">
											<h3 className="event-title">Bible school</h3>
											<span className="event-meta">
												<span><i className="fa fa-calendar"></i>30 mar 2014</span>
												<span><i className="fa fa-map-marker"></i> Saint paul church</span>

											</span>
										</a>
									</li>
									<li>
										<a href="#">
											<h3 className="event-title">praying for kids</h3>
											<span className="event-meta">
												<span><i className="fa fa-calendar"></i>30 mar 2014</span>
												<span><i className="fa fa-map-marker"></i> true church</span>

											</span>
										</a>
									</li>
									<li>
										<a href="#">
											<h3 className="event-title">love giving</h3>
											<span className="event-meta">
												<span><i className="fa fa-calendar"></i>30 mar 2014</span>
												<span><i className="fa fa-map-marker"></i> St cathedral</span>

											</span>
										</a>
									</li>
									<li>
										<a href="#">
											<h3 className="event-title">god ont the vacation</h3>
											<span className="event-meta">
												<span><i className="fa fa-calendar"></i>30 mar 2014</span>
												<span><i className="fa fa-map-marker"></i> greenie lake</span>

											</span>
										</a>
									</li>
									<li>
										<a href="#">
											<h3 className="event-title">homeless helping</h3>
											<span className="event-meta">
												<span><i className="fa fa-calendar"></i>30 mar 2014</span>
												<span><i className="fa fa-map-marker"></i> Detroit city</span>

											</span>
										</a>
									</li>
								</ul>

								<div className="text-center">
									<a href="#" className="button">See all events</a>
								</div>
							</div>
							<div className="col-md-6">
								<h2 className="section-title">Latest seremons</h2>
								<ul className="seremon-list">
									<li>
										<img src="images/small-thumb-1.jpg" alt=""/>
										<div className="seremon-detail">
											<h3 className="seremon-title"><a href="#">I believe in god with all my heart</a></h3>
											<div className="seremon-meta">
												<div className="pastor"><i className="fa fa-user"></i> Alan Ray</div>
												<div className="date"><i className="fa fa-calendar"></i> 18 mar 2014</div>
											</div>
										</div>
									</li>
									<li>
										<img src="images/small-thumb-2.jpg" alt=""/>
										<div className="seremon-detail">
											<h3 className="seremon-title"><a href="#">Trusting in jesus and god</a></h3>
											<div className="seremon-meta">
												<div className="pastor"><i className="fa fa-user"></i> David Clark</div>
												<div className="date"><i className="fa fa-calendar"></i> 18 mar 2014</div>
											</div>
										</div>
									</li>
									<li>
										<img src="images/small-thumb-3.jpg" alt=""/>
										<div className="seremon-detail">
											<h3 className="seremon-title"><a href="#">Love your kids</a></h3>
											<div className="seremon-meta">
												<div className="pastor"><i className="fa fa-user"></i> anthony roberts</div>
												<div className="date"><i className="fa fa-calendar"></i> 18 mar 2014</div>
											</div>
										</div>
									</li>
								</ul>

								<div className="text-center">
									<a href="#" className="button">See all seremons</a>
								</div>
							</div>
						</div>
					</div> 
				</div> 
			</main> 

			<footer className="site-footer">
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<div className="widget">
								<h3 className="widget-title">Our address</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi perspiciatis magnam, ab ipsa laboriosam tempore tenetur, aliquid repellat, ex cum dicta reiciendis accusamus. Omnis repudiandae quasi mollitia, iusto odio dignissimos.</p>
								<ul className="address">
									<li><i className="fa fa-map-marker"></i> 329 Church St, Garland, TX 75042</li>
									<li><i className="fa fa-phone"></i> (425) 853 442 552</li>
									<li><i className="fa fa-envelope"></i> info@yourchurch.com</li>
								</ul>
							</div>
						</div>
						<div className="col-md-4">
							<div className="widget">
								<h3 className="widget-title">Topics from last meeting</h3>
								<ul className="bullet">
									<li><a href="#">Lorem ipsum dolor sit amet</a></li>
									<li><a href="#">Consectetur adipisicing elit quis nostrud</a></li>
									<li><a href="#">Eiusmod tempor incididunt ut labore et dolore magna</a></li> 
									<li><a href="#">Ut enim ad minim veniam cillum</a></li>
									<li><a href="#">Exercitation ullamco laboris nisi ut aliquip</a></li> 
									<li><a href="#">Duis aute irure dolor in reprehenderit in voluptate</a></li>
								</ul>
							</div>
						</div>
						<div className="col-md-4">
							<div className="widget">
								<h3 className="widget-title">Contact form</h3>
								<form action="#" className="contact-form">
									<div className="row">
										<div className="col-md-6"><input type="text" placeholder="Your name..."/></div>
										<div className="col-md-6"><input type="text" placeholder="Email..."/></div>
									</div>
									
									<textarea name="" placeholder="Your message..."></textarea>
									<div className="text-right"><input type="submit" value="Send message"/></div>
									
								</form>
							</div>
						</div>
					</div>

					<p className="colophon">Copyright 2014 True Church. All right reserved</p>
				</div>
			</footer> 

		</div>
      
      
      
    );
  }
}

export default App;
