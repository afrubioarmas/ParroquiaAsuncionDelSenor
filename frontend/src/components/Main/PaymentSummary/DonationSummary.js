import React from 'react';

const donationSummary = (props) => {
    return (
        <div>
            <p>Donar a: {props.donation}</p>
        </div>
    );
};

export default donationSummary;