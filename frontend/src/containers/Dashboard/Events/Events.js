import React, { Component } from 'react';

import TopNav from '../../../components/Dashboard/TopNav/TopNav';


class Events extends Component {
    render() {
        return (
            <div className="main-panel">
                <TopNav title={"Administración de eventos"}/>
                <div className="content">
                    Hola eventos
                </div>
            </div>
           
        );
    }
}

export default Events;