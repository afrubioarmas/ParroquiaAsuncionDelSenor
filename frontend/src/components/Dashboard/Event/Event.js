import React from 'react';
import * as moment from 'moment';

const event = (props) => {
    var edit ={
        id:props.id,
        name:props.name,
        startDate:props.startDate,
        endDate:props.endDate
    }
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{moment(props.startDate).format('DD-MM-YYYY HH:mm')}</td>
            <td>{moment(props.endDate).format('DD-MM-YYYY HH:mm')}</td>
            <td align="center">
                <button className="datatable-button" onClick={props.handleDelete(props.id)}><i className="ti-trash"></i></button>
                <button className="datatable-button" onClick={props.handleToggleEdit(edit)}><i className="ti-pencil"></i></button>            
            </td>
        </tr>
    );
};

export default event;