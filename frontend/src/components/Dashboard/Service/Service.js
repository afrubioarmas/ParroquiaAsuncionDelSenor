import React from 'react';
const service = (props) => {
    var edit ={
        id:props.id,
        name:props.name,
        currency:props.currency,
        basePrice:props.basePrice,
        category:props.category
    }
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.currency}</td>
            <td>{props.basePrice}</td>
            <td>{props.category}</td>
            <td align="center">
                <button className="datatable-button" onClick={props.handleDelete(props.id)}><i className="ti-trash"></i></button>
                <button className="datatable-button" onClick={props.handleToggleEdit(edit)}><i className="ti-pencil"></i></button>            
            </td>
        </tr>
    );
};

export default service;