import React from 'react';
import * as moment from 'moment';

const nicho = (props) => {

    return (
        <tr>
            <td>{props.nicho.name}</td>
            <td>{props.nicho.email}</td>
            <td>{props.nicho.personalId}</td>
            <td>{props.nicho.amount} {props.nicho.currency}</td>
            <td>{props.nicho.category}->{props.nicho.serviceName}</td>
            <td>{moment(props.nicho.date).format('DD-MM-YYYY HH:mm')}</td>
            <td>{props.nicho.transferNum}</td>
            <td>
                <select defaultValue={props.nicho.status} className="form-control" onChange={props.handleEditStatus(props.nicho)}>
                    <option>Por Confirmar</option>
                    <option>Confirmada</option>
                    <option>Confirmada Erroneamente</option>
                </select>
            </td>
        </tr>
    );
};

export default nicho;