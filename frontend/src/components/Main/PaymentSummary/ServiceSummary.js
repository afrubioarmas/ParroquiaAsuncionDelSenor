import React from 'react';

import './ServiceSummary.css';

const serviceSummary = (props) => {
    return (
        <div>
            <p className="summary-p">Servicio a pagar: <strong>{props.service}</strong></p>
            <p className="summary-p">Precio Base: <strong>{props.price}</strong></p>
        </div>
    );
};

export default serviceSummary;