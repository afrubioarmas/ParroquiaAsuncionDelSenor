import React, { Component } from 'react';
import axios from '../../Axios';

import Event from '../../components/Event/Event';

class Calendar extends Component {

    state = {
        events: [],
        error: false
    }

    componentDidMount () {
        //console.log(this.props);
        axios.get( '/calendar' )
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
            <div className="col-md-6">
                <h2 className="section-title">Upcoming events</h2>
                <ul className="event-list">
                    {events}
                </ul>

                <div className="text-center">
                    <a href="#" className="button">See all events</a>
                </div>
            </div>
        );
    }
}

export default Calendar;