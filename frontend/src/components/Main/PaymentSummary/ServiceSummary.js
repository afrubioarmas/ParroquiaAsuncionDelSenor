import React from 'react';

import './ServiceSummary.css';

const serviceSummary = (props) => {
    return (
        <div className="summary">
            <h3 className="service-summary-title">Servicio</h3>
            <h4>{props.service}</h4>
            <h3 className="service-summary-title">Precio Base</h3> 
            <h4>{props.price} {props.currency}</h4>
        </div>
    );
};

export default serviceSummary;