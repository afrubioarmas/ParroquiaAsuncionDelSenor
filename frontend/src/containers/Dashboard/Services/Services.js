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
        edit:{toggle:false,id:'',name:'',currency:'',basePrice:''},
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
                this.setState({services:[]});
                //console.log(response);
            })
            .catch(response => {
                //handle error
                //console.log(response);
            });
    }

    handleToggleEdit=(edit)=>(e)=>{
        e.preventDefault();
        
        this.setState({edit:{toggle:true,id:edit.id,name:edit.name,currency:edit.currency,basePrice:edit.basePrice}});

    }

    handleEdit=(e)=>{
        e.preventDefault();

        let data = new FormData();

        data.append('id', this.state.edit.id);
        data.append('name', this.state.edit.name);
        data.append('currency', this.state.edit.currency);
        data.append('basePrice', this.state.edit.basePrice);


        const config = { headers: {'Content-Type': 'multipart/form-data'}}

        axios.post('/service',data,config)
            .then(response => {
                //handle success
                this.setState({services:[],edit:{toggle:false,id:'',name:'',currency:'',basePrice:''}});
                //console.log(response);
            })
            .catch(response => {
                //handle error
                //console.log(response);
            });
    }

    handleDelete = (id)=>(e) =>{
        e.preventDefault();
        

        axios.delete('/service/'+id)
            .then(response => {
                //handle success
                this.setState({services:[]});
                //console.log(response);
            })
            .catch(response => {
                //handle error
                //console.log(response);
            });

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
                //console.log(this.state.services);
                //console.log( "respose" + response );
                const $ = window.$;
                $(document).ready( function () {
                    $('#servicesTable').DataTable();
                } );
            } )
            .catch(error => {
                //console.log(error);
                this.setState({error: true});
            });
        }

        
        componentDidUpdate(){
            if(this.state.services.length===0){
            this.componentDidMount();
            }
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

                        handleDelete={this.handleDelete}

                        handleToggleEdit={this.handleToggleEdit}
                        />
                );
            });
        }
        return (
            <div className="main-panel">
                <TopNav title={"Administración de Servicios"}/>
                <div className="content">
                        <AllServices >
                            {services}
                        </AllServices>    
                        <CreateService handleCreate={this.handleCreate} create={this.state.create}/>
                        <EditService handleEdit={this.handleEdit} edit={this.state.edit} />
                </div>
            </div>
           
        );
    }
}

export default Services;