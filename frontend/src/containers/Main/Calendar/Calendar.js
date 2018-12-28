import React, { Component } from 'react';
import axios from '../../../Axios';

import Event from '../../../components/Main/Event/Event';

class Calendar extends Component {

    state = {
        events: [],
        error: false
    }

    componentDidMount () {
        //console.log(this.props);
        axios.get( '/calendar' )
            .then( response => {
                const events = response.data;
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

    render() {

        let events = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            events = this.state.events.map(event => {
                return (
                    <Event 
                        key={event.id}
                        name={event.name}
                        date={event.StartDate}
                        />
                );
            });
        }

        return (
            <React.Fragment>
                <div className="page-head">
                    <div className="container">
                        <h2 className="page-title">Calendario</h2>
                    </div>
                </div>

                <main className="main-content">
                    <div className="fullwidth-block">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 col-centered ">
                                    <h2 className="section-title">Proximos Eventos</h2>
                                    <ul className="event-list large">
                                        {events}
                                    </ul>
                                </div>
                                {}
                            </div>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        );
    }
}

export default Calendar;