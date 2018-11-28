import React from 'react';

const newInstance = (props) => {
    return (
        <div className="col-md-3 col-sm-6">
            <div className="news">
                <img className="news-image" src="images/news-thumb-1.jpg"></img>
                <h3 className="news-title"><a href="#">{props.title}</a></h3>
                <small className="date"><i className="fa fa-calendar"></i>{props.date}</small>
            </div>
        </div>
    );
};

export default newInstance;