import React, { Component } from 'react';
import * as moment from 'moment';

import axios from '../../../Axios';

import Pago from './Pago';


class Pagos extends Component {

    state = {
        pagos: [],
        error: false
    }

    handleEditStatus=(pago)=>(e)=>{
        e.preventDefault();

        let data = new FormData();

        data.append('id', pago.id);
        data.append('serviceId', pago.serviceId);
        data.append('name', pago.name);
        data.append('personalId', pago.personalId  );
        data.append('amount', pago.amount);
        data.append('date',moment(pago.date).format('YYYY-MM-DD HH:mm'));
        data.append('transferNum', pago.transferNum);
        data.append('email', pago.email);
        data.append('status', e.target.value);
       
        //console.log(pago);

        const config = { headers: {'Content-Type': 'multipart/form-data'}}

        axios.post('/payment',data,config)
            .then(response => {
                //handle success
                //this.componentDidMount();
                //console.log(response);
            })
            .catch(response => {
                //handle error
                //console.log(response);
            });

    }

    componentDidMount () {
        //console.log(this.props);
        axios.get( '/paymentByCategory/'+this.props.paymentType )
            .then( response => {
                const pagos = response.data;
                const updatedPagos = pagos.map(pago => {
                    return {
                        ...pago
                    }
                });
                this.setState({pagos: updatedPagos}); 
                //console.log(this.state.pagos);
                //console.log( "respose" + response );


                const $ = window.$;
                const paymentType = this.props.paymentType;

                $.fn.dataTable.ext.order['dom-select'] = function  ( settings, col )
                {
                    return this.api().column( col, {order:'index'} ).nodes().map( function ( td, i ) {
                        return $('select', td).val();
                    } );
                }

                $(document).ready( function () {
                    $('#'+paymentType+'Table').DataTable({
                        "columns": [
                            null,
                            null,
                            null,
                            null,
                            null,
                            null,
                            null,
                            { "orderDataType": "dom-select" }
                        ]
                    } );
                } );
                
            } )
            .catch(error => {
                //console.log(error);
                this.setState({error: true});
            });
        }


    render() {

        let pagos;
        if (!this.state.error) {
            pagos = this.state.pagos.map(pago => {
                //console.log(event);
                return (
                    
                    <Pago 
                        key={pago.id}
                        pago={pago}

                        handleEditStatus={this.handleEditStatus}
                    />
                );
            });
        }


        return (
            <div>
                <h3>{this.props.paymentType}</h3>
                <p>Lista de todos los pagos por {this.props.paymentType} realizadas por los usuarios.</p>
                <div className="content table-responsive table-full-width">
                    <table id={this.props.paymentType+"Table"} className="table table-striped hover">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Email</th>
                                <th>Cedula</th>
                                <th>Monto</th>
                                <th>Servicio</th>
                                <th>Fecha</th>
                                <th># Transferencia</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pagos}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Pagos;