import React, { Component } from 'react';
import * as moment from 'moment';

import axios from '../../../Axios';

import Nicho from './Nicho';


class Nichos extends Component {

    state = {
        nichos: [],
        error: false
    }

    handleEditStatus=(nicho)=>(e)=>{
        e.preventDefault();

        let data = new FormData();

        data.append('id', nicho.id);
        data.append('serviceId', nicho.serviceId);
        data.append('name', nicho.name);
        data.append('personalId', nicho.personalId  );
        data.append('amount', nicho.amount);
        data.append('date',moment(nicho.date).format('YYYY-MM-DD HH:mm'));
        data.append('transferNum', nicho.transferNum);
        data.append('email', nicho.email);
        data.append('status', e.target.value);
       
        console.log(nicho);

        const config = { headers: {'Content-Type': 'multipart/form-data'}}

        axios.post('/payment',data,config)
            .then(response => {
                //handle success
                this.setState({nichos: []});
                //console.log(response);
            })
            .catch(response => {
                //handle error
                //console.log(response);
            });

    }

    componentDidMount () {
        //console.log(this.props);
        axios.get( '/paymentByService/2' )
            .then( response => {
                const nichos = response.data;
                const updatedNichos = nichos.map(nicho => {
                    return {
                        ...nicho
                    }
                });
                this.setState({nichos: updatedNichos}); 
                console.log(this.state.nichos);
                //console.log( "respose" + response );


                const $ = window.$;
                $(document).ready( function () {
                    $('#nichosTable').DataTable();
                } );
            } )
            .catch(error => {
                //console.log(error);
                this.setState({error: true});
            });
    }

        
    componentDidUpdate(){
        if(this.state.nichos.length===0){
        this.componentDidMount();
        }
    }

    render() {

        let nichos;
        if (!this.state.error) {
            nichos = this.state.nichos.map(nicho => {
                //console.log(event);
                return (
                    
                    <Nicho 
                        key={nicho.id}
                        nicho={nicho}

                        handleEditStatus={this.handleEditStatus}
                    />
                );
            });
        }


        return (
            <div>
                <h3>Nichos</h3>
                <p>Lista de todos los pagos por Nichos realizadas por los usuarios.</p>
                <div className="content table-responsive table-full-width">
                    <table id="nichosTable" className="table table-striped hover">
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
                            {nichos}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Nichos;