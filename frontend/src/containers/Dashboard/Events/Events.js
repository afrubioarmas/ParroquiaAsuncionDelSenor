import React, { Component } from 'react';
import * as moment from 'moment';

import TopNav from '../../../components/Dashboard/TopNav/TopNav';
import AllEvents from '../../../components/Dashboard/AllEvents/AllEvents';
import CreateEvent from '../../../components/Dashboard/CreateEvent/CreateEvent';
import EditEvent from '../../../components/Dashboard/EditEvent/EditEvent';
import Event from '../../../components/Dashboard/Event/Event';

import axios from '../../../Axios';


class Events extends Component {

    state = {
        create:{name:'',startDate:moment(),endDate:moment()},
        edit:{toggle:false,id:'',name:'',startDate:moment(),endDate:moment()},
        events: [],
        error: false
    }

    handleCreate= (create) => (e) =>{
        e.preventDefault();
        console.log(this.state.create.startDate.format('YYYY-MM-DD HH:mm'));

        let data = new FormData();

        data.append('name', create.name);
        data.append('startDate', create.startDate.format('YYYY-MM-DD HH:mm'));
        data.append('endDate', create.endDate.format('YYYY-MM-DD HH:mm'));

        
        const config = { headers: {'Content-Type': 'multipart/form-data'}}

        axios.put('/calendar',data,config)
            .then(response => {
                //handle success
                this.setState({events:[]});
                //console.log(response);
            })
            .catch(response => {
                //handle error
                //console.log(response);
            });
    }

    handleToggleEdit=(edit)=>(e)=>{
        e.preventDefault();
        
        this.setState({edit:{toggle:true,id:edit.id,name:edit.name,startDate:edit.startDate,endDate:edit.endDate}});

    }

    handleEdit=(e)=>{
        e.preventDefault();

        let data = new FormData();

        data.append('id', this.state.edit.id);
        data.append('name', this.state.edit.name);
        data.append('startDate', this.state.edit.startDate.format('YYYY-MM-DD HH:mm'));
        data.append('endDate', this.state.edit.endDate.format('YYYY-MM-DD HH:mm'));


        const config = { headers: {'Content-Type': 'multipart/form-data'}}

        axios.post('/calendar',data,config)
            .then(response => {
                //handle success
                this.setState({events:[],edit:{toggle:false,id:'',name:'',startDate:moment(),endDate:moment()}});
                //console.log(response);
            })
            .catch(response => {
                //handle error
                //console.log(response);
            });
    }

    handleDelete = (id)=>(e) =>{
        e.preventDefault();
        

        axios.delete('/calendar/'+id)
            .then(response => {
                //handle success
                this.setState({events:[]});
                //console.log(response);
            })
            .catch(response => {
                //handle error
                //console.log(response);
            });

    }
    
    componentDidMount () {
        //console.log(this.props);
        axios.get( '/calendar' )
            .then( response => {
                const events = response.data;
                const updatedevents = events.map(event => {
                    return {
                        ...event
                    }
                });
                this.setState({events: updatedevents}); 
                //console.log(this.state.events);
                //console.log( "respose" + response );
                const $ = window.$;
                $(document).ready( function () {
                    $('#eventsTable').DataTable();
                } );
            } )
            .catch(error => {
                //console.log(error);
                this.setState({error: true});
            });
        }

        
        /* componentDidUpdate(){
            if(this.state.events.length===0){
            this.componentDidMount();
            }
        } */


   

    render() {

        let events;
        if (!this.state.error) {
            events = this.state.events.map(event => {
                //console.log(event);
                return (
                    
                    <Event 
                        key={event.id}
                        id={event.id}
                        name={event.name}
                        startDate={event.StartDate}
                        endDate={event.EndDate}

                        handleDelete={this.handleDelete}

                        handleToggleEdit={this.handleToggleEdit}
                        />
                );
            });
        }

        return (
            <div className="main-panel">
                <TopNav title={"Administración de eventos"}/>
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <AllEvents>
                                {events}
                            </AllEvents>    
                            <CreateEvent 
                                handleCreate={this.handleCreate}
                            />
                            <EditEvent handleEdit={this.handleEdit} edit={this.state.edit}/>
                        </div>
                    </div>
                </div>
            </div>
           
        );
    }
}

export default Events;