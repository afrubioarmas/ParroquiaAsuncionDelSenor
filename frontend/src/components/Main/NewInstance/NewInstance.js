import React from 'react';
import * as moment from 'moment';
import {Registry} from '../../../assets/Registry'

const NewInstance = (props) => {

    let instance = (
        <li>
            <img className="image-thumbnail" src={Registry.ImgPath+props.newInstance.image} alt=""/>
            <div className="seremon-detail">
                <h3 className="seremon-title">{props.newInstance.title}</h3>
                <div className="seremon-meta">
                    <div className="date"><i className="fa fa-calendar"></i>{moment(props.newInstance.date).format('DD-MM-YYYY HH:mm')}</div>
                </div>
                <p>{props.newInstance.content}</p>
            </div>
        </li>
    );

    if (props.home) {
        instance = (
            <div className="col-md-3 col-sm-6">
                <div className="news">
                    <img className="news-image" src={Registry.ImgPath+props.newInstance.image} alt=""></img>
                    <h3 className="news-title"><a href="">{props.newInstance.title}</a></h3>
                    <small className="date"><i className="fa fa-calendar"></i>{props.newInstance.date}</small>
                </div>
            </div>
        );
    }

    return (
        instance
    );
};

export default NewInstance;