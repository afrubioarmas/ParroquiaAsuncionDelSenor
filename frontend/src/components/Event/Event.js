import React from 'react';

const event = (props) => {
    return (
        <li>
            <a href="#">
                <h3 className="event-title">{props.name}</h3>
                <span className="event-meta">
                    <span><i className="fa fa-calendar"></i>{props.date}</span>
                    <span><i className="fa fa-map-marker"></i>Location ? </span>
                </span>
            </a>
        </li>
    );
};

export default event;