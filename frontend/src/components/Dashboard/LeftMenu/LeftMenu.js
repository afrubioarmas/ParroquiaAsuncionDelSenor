import React from 'react';
import {NavLink} from 'react-router-dom';

const leftMenu = () => (

  <div className="sidebar" data-background-color="white" data-active-color="danger">
    <div className="sidebar-wrapper">
          <div className="logo">
              <a href="http://www.creative-tim.com" className="simple-text">
                  Parroquia La Asunsión del Señor
              </a>
          </div>

          <ul className="nav">
              <li className="active">
                  <a href="/dashboard">
                      <i className="ti-dashboard"></i>
                      <p>Panel principal</p>
                  </a>
              </li>
              <li>
                  <a href="/dashboard/users">
                      <i className="ti-user"></i>
                      <p>Admin usuarios</p>
                  </a>
              </li>
              <li>
                  <a href="/dashboard/events">
                      <i className="ti-alarm-clock"></i>
                      <p>Admin eventos</p>
                  </a>
              </li>
              <li>
                  <a href="/dashboard/news">
                      <i className="ti-announcement"></i>
                      <p>Admin noticias</p>
                  </a>
              </li>
              <li>
                  <a href="/dashboard/services">
                      <i className="ti-archive"></i>
                      <p>Admin servicios</p>
                  </a>
              </li>
              <li>
                  <a href="/dashboard/payments">
                      <i className="ti-money"></i>
                      <p>Admin pagos</p>
                  </a>
              </li>
              <li>
                  <a href="/dashboard/content">
                      <i className="ti-write"></i>
                      <p>Admin contenido</p>
                  </a>
              </li>
              <li className="active-pro">
                  <a href="/dashboard/logout">
                      <i className="ti-export"></i>
                      <p>Salir</p>
                  </a>
              </li>
          </ul>
    </div>
  </div>
    
);

export default leftMenu;