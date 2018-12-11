import React, { Component } from 'react';

import TopNav from '../../../components/Dashboard/TopNav/TopNav';
import Service from '../../../components/Dashboard/Service/Service';
import AllServices from '../../../components/Dashboard/AllServices/AllServices';
import CreateService from '../../../components/Dashboard/CreateService/CreateService';
import EditService from '../../../components/Dashboard/EditService/EditService';

import axios from '../../../Axios';


class Services extends Component {

   
   
    state = {
        create:{name:'',currency:'',basePrice:''},
        services: [],
        error: false
    }

    handleCreate= (e) =>{
        e.preventDefault();

        let data = new FormData();

        data.append('name', this.state.create.name);
        data.append('currency', this.state.create.currency);
        data.append('basePrice', this.state.create.basePrice);


        const config = { headers: {'Content-Type': 'multipart/form-data'}}

        axios.put('/service',data,config)
            .then(response => {
                //handle success
                
                console.log(response);
            })
            .catch(response => {
                //handle error
                console.log(response);
            });
    }

    

    handleEdit(e){
        e.preventDefault();
        console.log('The link edit was clicked.');

    }

    handleDelete(e){
        e.preventDefault();
        console.log('The link delete was clicked.');

    }

    componentDidMount () {
        //console.log(this.props);
        axios.get( '/service' )
            .then( response => {
                const services = response.data;
                const updatedServices = services.map(service => {
                    return {
                        ...service
                    }
                });
                this.setState({services: updatedServices}); 
                console.log(this.state.services);
                //console.log( "respose" + response );
                const $ = window.$;
                $(document).ready( function () {
                    $('#servicesTable').DataTable();
                    buttons: [
                        'copy', 'excel', 'pdf'
                    ]
                } );
            } )
            .catch(error => {
                //console.log(error);
                this.setState({error: true});
            });
        }

   

    render() {
        let services;
        if (!this.state.error) {
            services = this.state.services.map(service => {
                //console.log(service);
                return (
                    
                    <Service 
                        key={service.id}
                        id={service.id}
                        name={service.name}
                        currency={service.currency}
                        basePrice={service.basePrice}
                        />
                );
            });
        }
        return (
            <div className="main-panel">
                <TopNav title={"Administración de Servicios"}/>
                <div className="content">
                        <AllServices>
                            {services}
                        </AllServices>    
                        <CreateService handleCreate={this.handleCreate} create={this.state.create}/>
                        <EditService/>
                </div>
            </div>
           
        );
    }
}

export default Services;