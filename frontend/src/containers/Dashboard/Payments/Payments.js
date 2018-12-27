import React, { Component } from 'react';

import TopNav from '../../../components/Dashboard/TopNav/TopNav';
import Donations from '../../../containers/Dashboard/Donations/Donations';
import Pagos from '../Pagos/Pagos';


class Payments extends Component {

    
    
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
                                        <li className="active"><a data-toggle="tab" href="#donations">Donaciones</a></li>
                                        <li><a data-toggle="tab" href="#nichos">Nichos</a></li>
                                        <li><a data-toggle="tab" href="#sacramentos">Sacramentos</a></li>
                                        <li><a data-toggle="tab" href="#misas">Misas</a></li>
                                    </ul>

                                    <div className="tab-content" style={{paddingLeft: '20px'}}>
                                        <div id="donations" className="tab-pane fade in active">
                                            <Donations />
                                        </div>
                                        <div id="nichos" className="tab-pane fade">
                                            <Pagos paymentType={'Nichos'}/>
                                        </div>
                                        <div id="sacramentos" className="tab-pane fade">
                                            <Pagos paymentType={'Sacramentos'}/> 
                                        </div>
                                        <div id="misas" className="tab-pane fade">
                                            <Pagos paymentType={'Misas'}/>
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