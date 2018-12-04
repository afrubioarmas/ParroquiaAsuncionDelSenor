import React, { Component } from 'react';

import TopNav from '../../../components/Dashboard/TopNav/TopNav';
import NewInstance from '../../../components/Dashboard/NewInstance/NewInstance';
import AllNews from '../../../components/Dashboard/AllNews/AllNews';
import CreateNew from '../../../components/Dashboard/CreateNew/CreateNew';
import EditNew from '../../../components/Dashboard/EditNew/EditNew';


import axios from '../../../Axios';


class News extends Component {

    state = {
        events: [],
        error: false
    }

    componentWillMount () {
        //console.log(this.props);
        axios.get( '/new' )
            .then( response => {
                const events = response.data.slice(0, 4);
                const updatedEvents = events.map(event => {
                    return {
                        ...event
                    }
                });
                this.setState({events: updatedEvents}); 
                //console.log(this.state.events);
                //console.log( "respose" + response );
            } )
            .catch(error => {
                //console.log(error);
                this.setState({error: true});
            });
        }

    componentDidMount () {
        const $ = window.$;
        $(document).ready( function () {
            $('#newsTable').DataTable();
        } );
    }

    render() {
        let news = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            news = this.state.events.map(newAux => {
                console.log(newAux);
                return (
                    
                    <NewInstance 
                        key={newAux.id}
                        id={newAux.id}
                        title={newAux.title}
                        content={newAux.content}
                        image={newAux.image}
                        video={newAux.video}
                        date={newAux.date}
                        />
                );
            });
        }
        return (
            <div className="main-panel">
                <TopNav title={"Administración de noticias"}/>
                <div className="content">
                        <AllNews>
                            {news}
                        </AllNews>    
                        <CreateNew/>
                        <EditNew/>
                </div>
            </div>
           
        );
    }
}

export default News;