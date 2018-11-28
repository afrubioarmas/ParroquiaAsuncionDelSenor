import React, { Component } from 'react';

import TopNav from '../../../components/Dashboard/TopNav/TopNav';


class Services extends Component {
    render() {
        return (
            <div className="main-panel">
                <TopNav title={"Administración de servicios"}/>
                <div className="content">
                    Hola servicios
                </div>
            </div>
           
        );
    }
}

export default Services;