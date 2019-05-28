import React, { Component } from 'react';

import TopNav from '../../../components/Dashboard/TopNav/TopNav';


class Content extends Component {
    render() {
        return (
            <div className="main-panel">
                <TopNav title={"Administración de contenido"}/>
                <div className="content">
                    Hola contenido
                </div>
            </div>
           
        );
    }
}

export default Content;