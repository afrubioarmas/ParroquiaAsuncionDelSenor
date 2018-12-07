import React from 'react';

const serviceSummary = (props) => {
    return (
        <div>
            <p>Servicio a pagar: {props.service}</p>
            <p>Precio Base: {props.price}</p>
        </div>
    );
};

export default serviceSummary;