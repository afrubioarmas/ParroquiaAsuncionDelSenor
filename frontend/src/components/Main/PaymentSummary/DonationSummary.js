import React from 'react';

import './DonationSummary.css';

const donationSummary = (props) => {
    return (
        <div className="conatiner">
            <div className="row">
                <p className="summary-p col-md-12">Donar a: <strong>{props.donation}</strong></p>
            </div>
            <div className="row center-content">
                <button style={{width: '40%'}} className="payment-button col-md-12" onClick={props.clicked}>Realizar Donación</button>
            </div>

        </div>
    );
};

export default donationSummary;