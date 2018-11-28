import React, { Component } from 'react';

import TopNav from '../../../components/Dashboard/TopNav/TopNav';


class News extends Component {
    render() {
        return (
            <div className="main-panel">
                <TopNav title={"Administración de noticias"}/>
                <div className="content">
                    Hola Noticias
                </div>
            </div>
           
        );
    }
}

export default News;