import React from 'react';
import {NavLink} from 'react-router-dom';

const header = () => (

    <header className="site-header">
        <div className="container">
        <a href="#" className="branding">
            <img src="images/logo.png" alt="" className="logo"/>
            <h1 className="site-title">La Anunciación del Señor</h1>
        </a>

        <div className="main-navigation">
            <button className="menu-toggle"><i className="fa fa-bars"></i> Menu</button>
            <ul className="menu">
            <li className="menu-item current-menu-item"><NavLink to="/" exact>Inicio</NavLink></li>
            <li className="menu-item"><a href="#">Pastors</a></li>
            <li className="menu-item"><a href="seremons.html">Seremons</a></li>
            <li className="menu-item"><NavLink to="/events" exact>Events</NavLink></li>
            <li className="menu-item"><a href="families.html">Families</a></li>
            <li className="menu-item"><a href="#">Contact</a></li>
            </ul>
        </div>

        <div className="mobile-navigation"></div>
        </div>
    </header>
    
);

export default header;