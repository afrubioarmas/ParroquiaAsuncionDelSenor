import React, { Component } from 'react';

import TopNav from '../../../components/Dashboard/TopNav/TopNav';


class Payments extends Component {

    componentDidMount(){
        const $ = window.$;
        $(document).ready( function () {
            $('#paymentTable').DataTable();
        } );
    }
    
    render() {
        return (
            <div className="main-panel">
                <TopNav title={"Administración de pagos"}/>
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="header">
                                        <h4 className="title">Pagos</h4>
                                        <p className="category">Seleccione el tipo de pago que desea gestionar.</p>
                                    </div>
                                    <ul className="nav nav-tabs" style={{paddingLeft: '20px'}}>
                                        <li className="active"><a data-toggle="tab" href="#home">Donaciones</a></li>
                                        <li><a data-toggle="tab" href="#menu1">Nichos</a></li>
                                        <li><a data-toggle="tab" href="#menu2">Sacramentos</a></li>
                                        <li><a data-toggle="tab" href="#menu2">Misas</a></li>
                                    </ul>

                                    <div className="tab-content" style={{paddingLeft: '20px'}}>
                                        <div id="home" className="tab-pane fade in active">
                                            <h3>HOME</h3>
                                            <p>Some content.</p>
                                        </div>
                                        <div id="menu1" className="tab-pane fade">
                                            <h3>Menu 1</h3>
                                            <p>Some content in menu 1.</p>
                                        </div>
                                        <div id="menu2" className="tab-pane fade">
                                            <h3>Menu 2</h3>
                                            <p>Some content in menu 2.</p>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
           
        );
    }
}

export default Payments;