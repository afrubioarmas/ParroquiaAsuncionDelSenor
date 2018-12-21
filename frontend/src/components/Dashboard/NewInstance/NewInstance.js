import React from 'react';
import * as moment from 'moment';
import { Registry } from '../../../assets/Registry.js';

const newInstance = (props) => {

    var edit ={
        id:props.id,
        title:props.title,
        content:props.content,
        image:props.image,
        video:props.video,
        date:props.date
    }

    return (
        <tr>
            <td>{props.title}</td>
            <td>{props.content}</td>
            <td><img className="image-thumbnail" src={Registry.ImgPath+props.image} alt=""/></td>
            <td>{moment(props.date).format('DD-MM-YYYY HH:mm')}</td>
            <td align="center">
                <button className="datatable-button" onClick={props.handleDelete(props.id)}><i className="ti-trash"></i></button>
                <button className="datatable-button" onClick={props.handleToggleEdit(edit)}><i className="ti-pencil"></i></button>            
            </td>
        </tr>
    );
};

export default newInstance;