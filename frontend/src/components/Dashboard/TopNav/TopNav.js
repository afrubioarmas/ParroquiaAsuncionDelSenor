import React from 'react';

const topNav = (props) => (

  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar bar1"></span>
          <span className="icon-bar bar2"></span>
          <span className="icon-bar bar3"></span>
        </button>
        <a className="navbar-brand" href="">{props.title}</a>
      </div>
    </div>
  </nav>
    
);

export default topNav;

