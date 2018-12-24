import React from 'react';
import * as moment from 'moment';

const donation = (props) => {
    var statusToChange ={
        id:props.donation.id,
        status:''
    }
    return (
        <tr>
            <td>{props.donation.name}</td>
            <td>{props.donation.email}</td>
            <td>{props.donation.amount} {props.donation.currency}</td>
            <td>{props.donation.purpose}</td>
            <td>{props.donation.description}</td>
            <td>{moment(props.donation.date).format('DD-MM-YYYY HH:mm')}</td>
            <td>{props.donation.transferNum}</td>
            <td>{props.donation.status}</td>
        </tr>
    );
};

export default donation;