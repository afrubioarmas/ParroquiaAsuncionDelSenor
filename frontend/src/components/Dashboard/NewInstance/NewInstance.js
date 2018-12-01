import React from 'react';

const newInstance = (props) => {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.title}</td>
            <td>{props.content}</td>
            <td>{props.image}</td>
            <td>{props.video}</td>
            <td>{props.date}</td>
        </tr>
    );
};

export default newInstance;