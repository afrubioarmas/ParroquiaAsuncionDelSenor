import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

//import '../../../assets/css/style.css';

const toolbar = () => (

    <header className="site-header">
        <div className="container">
            <a href="/" className="branding">
                <Logo />
                <h1 className="site-title">True Church</h1>
            </a>    
            <NavigationItems />
            <div className="mobile-navigation"></div>
        </div>
    </header>

);

export default toolbar;