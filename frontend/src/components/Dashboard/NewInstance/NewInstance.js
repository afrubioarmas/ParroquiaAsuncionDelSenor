import React from 'react';

const newInstance = (props) => {

    var edit ={
        id:props.id,
        title:props.name,
        content:props.content,
        image:props.image,
        video:props.video,
        date:props.date
    }

    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.title}</td>
            <td>{props.content}</td>
            <td>{props.image}</td>
            <td>{props.video}</td>
            <td>{props.date}</td>
            <td align="center">
                <button className="datatable-button" onClick={props.handleDelete(props.id)}><i className="ti-trash"></i></button>
                <button className="datatable-button" onClick={props.handleToggleEdit(edit)}><i className="ti-pencil"></i></button>            
            </td>
        </tr>
    );
};

export default newInstance;