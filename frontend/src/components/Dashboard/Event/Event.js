import React from 'react';

const event = (props) => {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.startDate}</td>
            <td>{props.endDate}</td>
        </tr>
    );
};

export default event;