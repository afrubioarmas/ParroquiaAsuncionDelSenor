import React from 'react';
import * as moment from 'moment';

const donation = (props) => {

    return (
        <tr>
            <td>{props.donation.name}</td>
            <td>{props.donation.email}</td>
            <td>{props.donation.amount} {props.donation.currency}</td>
            <td>{props.donation.purpose}</td>
            <td>{props.donation.description}</td>
            <td>{moment(props.donation.date).format('DD-MM-YYYY HH:mm')}</td>
            <td>{props.donation.transferNum}</td>
            <td>
                <select defaultValue={props.donation.status} className="form-control" onChange={props.handleEditStatus(props.donation)}>
                    <option>Por Confirmar</option>
                    <option>Confirmada</option>
                    <option>Confirmada Erroneamente</option>
                </select>
            </td>
        </tr>
    );
};

export default donation;