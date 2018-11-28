import React from 'react';


const navigationItem = (props) => (

    <li>
        <a href={props.link} className="menu-item">{props.children}</a>
    </li>

);

export default navigationItem;