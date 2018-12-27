import React from 'react';
import * as moment from 'moment';

const pago = (props) => {

    return (
        <tr>
            <td>{props.pago.name}</td>
            <td>{props.pago.email}</td>
            <td>{props.pago.personalId}</td>
            <td>{props.pago.amount} {props.pago.currency}</td>
            <td>{props.pago.category}->{props.pago.serviceName}</td>
            <td>{moment(props.pago.date).format('DD-MM-YYYY HH:mm')}</td>
            <td>{props.pago.transferNum}</td>
            <td>
                <select defaultValue={props.pago.status} className="form-control" onChange={props.handleEditStatus(props.pago)}>
                    <option>Por Confirmar</option>
                    <option>Confirmada</option>
                    <option>Confirmada Erroneamente</option>
                </select>
            </td>
        </tr>
    );
};

export default pago;