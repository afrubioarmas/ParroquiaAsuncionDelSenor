import React from 'react';

const donationSummary = (props) => {
    return (
        <div>
            <p className="summary-p">Donar a: <strong>{props.donation}</strong></p>
            <button className="payment-button" onClick={props.clicked}>Realizar Donación</button>
        </div>
    );
};

export default donationSummary;