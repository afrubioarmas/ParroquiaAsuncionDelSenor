import React from 'react';
import * as moment from 'moment';

const event = (props) => {
    return (
        <li>

            <h3 className="event-title">{props.name}</h3>
            <span className="event-meta">
                <span><i className="fa fa-calendar"></i>{moment(props.date).format('llll')}</span>
            </span>
              
                   
        </li>
    );
};

export default event;

