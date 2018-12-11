import React from 'react';

const NewInstance = (props) => {

    let instance = (
        <li>
            <img src="images/thumb-1-120.png" alt=""/>
            <div className="seremon-detail">
                <h3 className="seremon-title">{props.title}</h3>
                <div className="seremon-meta">
                    <div className="date"><i className="fa fa-calendar"></i> 18 mar 2014</div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam molestiae doloribus deserunt minus a dicta labore beatae maiores assumenda. Laudantium nihil, maxime molestiae soluta doloribus magnam eum. Nesciunt, ea, sint.</p>
            </div>
        </li>
    );

    if (props.home) {
        instance = (
            <div className="col-md-3 col-sm-6">
            <div className="news">
                <img className="news-image" src="images/news-thumb-1.jpg" alt=""></img>
                <h3 className="news-title"><a href="">{props.title}</a></h3>
                <small className="date"><i className="fa fa-calendar"></i>{props.date}</small>
            </div>
        </div>
        );
    }

    return (
        instance
    );
};

export default NewInstance;