import React from 'react';

const service = (props) => {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.currency}</td>
            <td>{props.basePrice}</td>
        </tr>
    );
};

export default service;