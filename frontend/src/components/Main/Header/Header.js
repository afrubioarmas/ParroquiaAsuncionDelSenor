import React from 'react';
import {NavLink} from 'react-router-dom';

const header = () => (

    <header className="site-header">
        <div className="container">
        <a href="" className="branding"> 
            <img src="images/main/logo.jpeg" alt="" className="logo"/>
            <h1 className="site-title" style={{display:"none"}}>La Anunciación del Señor</h1>
        </a>

        <div className="main-navigation">
            <button className="menu-toggle"><i className="fa fa-bars"></i> Menu</button>
            <ul className="menu">
                <li className="menu-item"><NavLink to="/" exact activeClassName="active-menu">Inicio</NavLink></li>
                <li className="menu-item"><NavLink to="/organizacion" exact activeClassName="active-menu">Organización Eclesiástica</NavLink></li>
                <li className="menu-item"><NavLink to="/noticias" exact activeClassName="active-menu">Noticias</NavLink></li>
                <li className="menu-item"><NavLink to="/calendario" exact activeClassName="active-menu">Calendario</NavLink></li>
                <li className="menu-item"><NavLink to="/donaciones" exact activeClassName="active-menu">Donaciones</NavLink></li>
                <li className="menu-item"><NavLink to="/pagos" exact activeClassName="active-menu">Servicios de Pagos</NavLink></li>
                <li className="menu-item"><NavLink to="/contacto" exact activeClassName="active-menu">Contacto</NavLink></li>
            </ul>
        </div>

        <div className="mobile-navigation"></div>
        </div>
    </header>
    
);

export default header;