import React from 'react';

import NavigationItem from './NavigaitonItem/NavigationItem';

const navigationItems = () => (
    <div className="main-navigation">
        <button className="menu-toggle"><i className="fa fa-bars"></i>Menu</button>
        <ul className="menu">
            <NavigationItem link="/">HOMEPAGE</NavigationItem> 
            <NavigationItem link="/">PASTORS</NavigationItem> 
            <NavigationItem link="/">SEREMONS</NavigationItem> 
            <NavigationItem link="/">EVENTS</NavigationItem> 
            <NavigationItem link="/">FAMILIES</NavigationItem> 
            <NavigationItem link="/">CONTACT</NavigationItem> 
        </ul>
    </div>
);

export default navigationItems;