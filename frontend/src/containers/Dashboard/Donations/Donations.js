import React, { Component } from 'react';
import * as moment from 'moment';

import axios from '../../../Axios';
import Donation from './Donation';


class Donations extends Component {

    state = {
        donations: [],
        error: false
    }

    componentDidMount () {
        //console.log(this.props);
        axios.get( '/donation' )
            .then( response => {
                const donations = response.data;
                const updatedDonations = donations.map(donation => {
                    return {
                        ...donation
                    }
                });
                this.setState({donations: updatedDonations}); 
                console.log(this.state.donations);
                //console.log( "respose" + response );
                const $ = window.$;
                $(document).ready( function () {
                    $('#donationsTable').DataTable();
                } );
            } )
            .catch(error => {
                //console.log(error);
                this.setState({error: true});
            });
        }

        
        componentDidUpdate(){
            if(this.state.donations.length===0){
            this.componentDidMount();
            }
        }

   

    render() {

        let donations;
        if (!this.state.error) {
            donations = this.state.donations.map(donation => {
                //console.log(event);
                return (
                    
                    <Donation 
                        key={donation.id}
                        donation={donation}
                    />
                );
            });
        }


        return (
            <div>
                <h3>Donaciones</h3>
                <p>Lista de todas las donaciones realizadas por los usuarios.</p>
                <div className="content table-responsive table-full-width">
                    <table id="donationsTable" className="table table-striped hover">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Email</th>
                                <th>Monto</th>
                                <th>Razon</th>
                                <th>Descripcion</th>
                                <th>Fecha</th>
                                <th># Transferencia</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {donations}
                        </tbody>
                    </table>
                </div>
            </div>
           
        );
    }
}

export default Donations;