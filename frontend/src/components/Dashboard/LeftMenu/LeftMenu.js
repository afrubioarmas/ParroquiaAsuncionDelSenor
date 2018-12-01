import React from 'react';
import {NavLink,Link} from 'react-router-dom';

const leftMenu = () => (

  <div className="sidebar" data-background-color="white" data-active-color="danger">
    <div className="sidebar-wrapper">
          <div className="logo">
              <Link to="/" className="simple-text">
                  Parroquia La Asunsión del Señor
              </Link>
          </div>
          <ul className="nav">
              <li>
                  <NavLink to="/dashboard" exact activeClassName="active">
                      <i className="ti-dashboard"></i>
                      <p>Panel principal</p>
                  </NavLink>
              </li>
              <li>
                  <NavLink to="/dashboard/events" exact activeClassName="active">
                      <i className="ti-alarm-clock"></i>
                      <p>Admin eventos</p>
                  </NavLink>
              </li>
              <li>
                  <NavLink to="/dashboard/news" exact activeClassName="active">
                      <i className="ti-announcement"></i>
                      <p>Admin noticias</p>
                  </NavLink>
              </li>
              <li>
                  <NavLink to="/dashboard/services" exact activeClassName="active">
                      <i className="ti-archive"></i>
                      <p>Admin servicios</p>
                  </NavLink>
              </li>
              <li>
                  <NavLink to="/dashboard/payments" exact activeClassName="active">
                      <i className="ti-money"></i>
                      <p>Admin pagos</p>
                  </NavLink>
              </li>
              <li className="active-pro">
                  <NavLink to="/dashboard/logout" exact activeClassName="active">
                      <i className="ti-export"></i>
                      <p>Salir</p>
                  </NavLink>
              </li>
          </ul>
    </div>
  </div>
    
);

export default leftMenu;