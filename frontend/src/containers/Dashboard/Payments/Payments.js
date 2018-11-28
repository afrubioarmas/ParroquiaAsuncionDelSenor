import React, { Component } from 'react';

import TopNav from '../../../components/Dashboard/TopNav/TopNav';


class Payments extends Component {
    render() {
        return (
            <div className="main-panel">
                <TopNav title={"Administración de pagos"}/>
                <div className="content">
                    Hola pagos
                </div>
            </div>
           
        );
    }
}

export default Payments;