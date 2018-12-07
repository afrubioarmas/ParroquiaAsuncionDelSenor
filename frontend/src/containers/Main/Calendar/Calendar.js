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
                                <div className="content col-md-12">
                                    <h2 className="section-title">Proximos Eventos</h2>
                                    <ul className="event-list large">
                                        {events}
                                    </ul>
                                </div>
                                {/* <div class="sidebar col-md-3 col-md-offset-1">
                                    <div class="widget">
                                        <h3 class="widget-title">Categories</h3>
                                        <ul class="arrow">
                                            <li><a href="#">Perspiciatis unde</a></li>
                                            <li><a href="#">Omnis iste natus</a></li>
                                            <li><a href="#">Voluptatem accusantium</a></li>
                                            <li><a href="#">Doloremque eaque</a></li>
                                            <li><a href="#">Totam rem aperiam</a></li>
                                        </ul>
                                    </div>

                                    <div class="widget">
                                        <h3 class="widget-title">Donations</h3>
                                        <p>Distinctio unde consequuntur delectus, repudiandae, impedit atque earum adipisci, explicabo perferendis.</p>
                                        <a href="#" class="button">Make a donation</a>
                                    </div>

                                    <div class="widget">
                                        <h3 class="widget-title">Gallery updates</h3>

                                        <div class="galery-thumb">
                                            <a href="#"><img src="images/gallery-thumb-1.jpg" alt=""/></a>
                                            <a href="#"><img src="images/gallery-thumb-2.jpg" alt=""/></a>
                                            <a href="#"><img src="images/gallery-thumb-3.jpg" alt=""/></a>
                                            <a href="#"><img src="images/gallery-thumb-4.jpg" alt=""/></a>
                                            <a href="#"><img src="images/gallery-thumb-5.jpg" alt=""/></a>
                                            <a href="#"><img src="images/gallery-thumb-6.jpg" alt=""/></a>
                                        </div>
                                    </div>

                                    <div class="widget">
                                        <h3 class="widget-title">Text widget </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum aliquam obcaecati velit, atque necessitatibus molestias ullam tempore itaque quidem sequi ea sed consectetur, eligendi cupiditate saepe! Hic veniam maiores explicabo.</p>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        );
    }
}

export default Calendar;