import React, { Component } from 'react';

class Events extends Component {
    render() {
        return (

            <React.Fragment>
                <div className="page-head" id="events-title">
                    <div className="container">
                        <h2 className="page-title">Seremons</h2>
                    </div>
                </div>

                <main className="main-content">
                    <div className="fullwidth-block">
                        <div className="container">
                            <div className="row">
                                <div className="content col-md-8">
                                    <h2 className="section-title">Upcoming Events</h2>
                                    <ul className="event-list large">
                                        <li>
                                            <h3 className="event-title"><a href="#">africa mission trip</a></h3>
                                            <span className="event-meta">
                                                <span><i className="fa fa-calendar"></i>30 mar 2014</span>
                                                <span><i className="fa fa-map-marker"></i> Africa</span>
                                            </span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque recusandae rerum alias veniam nisi repellat, libero molestias praesentium dolore harum quisquam quam dolorum repudiandae et, earum doloremque repellendus fugiat ab.</p>
                                            <a href="#" className="button">Join to this event</a>
                                            <a href="#" className="button secondary">Ask a question</a>
                                        </li>
                                        <li>
                                            <h3 className="event-title"><a href="#">Bible school</a></h3>
                                            <span className="event-meta">
                                                <span><i className="fa fa-calendar"></i>30 mar 2014</span>
                                                <span><i className="fa fa-map-marker"></i> Saint paul church</span>
                                            </span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, consectetur explicabo beatae blanditiis dignissimos hic esse, voluptatum eaque maxime magni id possimus repudiandae ut exercitationem et temporibus ex vitae? Consequuntur!</p>
                                            <a href="#" className="button">Join to this event</a>
                                            <a href="#" className="button secondary">Ask a question</a>
                                        </li>
                                        <li>
                                            <h3 className="event-title"><a href="#">praying for kids</a></h3>
                                            <span className="event-meta">
                                                <span><i className="fa fa-calendar"></i>30 mar 2014</span>
                                                <span><i className="fa fa-map-marker"></i> true church</span>
                                            </span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit dicta dolores vero ipsum mollitia, laborum maiores beatae molestias numquam, eaque rerum optio facere nobis et voluptate, similique harum totam! At.</p>
                                            <a href="#" className="button">Join to this event</a>
                                            <a href="#" className="button secondary">Ask a question</a>
                                        </li>
                                        <li>
                                            <h3 className="event-title"><a href="#">love giving</a></h3>
                                            <span className="event-meta">
                                                <span><i className="fa fa-calendar"></i>30 mar 2014</span>
                                                <span><i className="fa fa-map-marker"></i> St cathedral</span>
                                            </span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit earum, minus error ipsum optio praesentium exercitationem necessitatibus accusamus reiciendis veritatis iste, aliquam nulla neque magni debitis deleniti harum molestias. Suscipit.</p>
                                            <a href="#" className="button">Join to this event</a>
                                            <a href="#" className="button secondary">Ask a question</a>
                                        </li>
                                        <li>
                                            <h3 className="event-title"><a href="#">god ont the vacation</a></h3>
                                            <span className="event-meta">
                                                <span><i className="fa fa-calendar"></i>30 mar 2014</span>
                                                <span><i className="fa fa-map-marker"></i> greenie lake</span>
                                            </span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae error officia, vero quo ducimus maiores, itaque consequatur vitae tempore nulla beatae quis. Asperiores perspiciatis facere harum ducimus doloribus. Neque, accusamus?</p>
                                            <a href="#" className="button">Join to this event</a>
                                            <a href="#" className="button secondary">Ask a question</a>
                                        </li>
                                        <li>
                                            <h3 className="event-title"><a href="#">homeless helping</a></h3>
                                            <span className="event-meta">
                                                <span><i className="fa fa-calendar"></i>30 mar 2014</span>
                                                <span><i className="fa fa-map-marker"></i> Detroit city</span>
                                            </span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, minus perspiciatis. Ad vero maxime iusto nemo, id optio iure officiis quisquam incidunt, ipsum suscipit! Unde facilis nisi totam. Reiciendis, accusamus.</p>
                                            <a href="#" className="button">Join to this event</a>
                                            <a href="#" className="button secondary">Ask a question</a>
                                        </li>
                                    </ul>
                                </div>
                                {/* <div className="sidebar col-md-3 col-md-offset-1">
                                    <div className="widget">
                                        <h3 className="widget-title">Categories</h3>
                                        <ul className="arrow">
                                            <li><a href="#">Perspiciatis unde</a></li>
                                            <li><a href="#">Omnis iste natus</a></li>
                                            <li><a href="#">Voluptatem accusantium</a></li>
                                            <li><a href="#">Doloremque eaque</a></li>
                                            <li><a href="#">Totam rem aperiam</a></li>
                                        </ul>
                                    </div>

                                    <div className="widget">
                                        <h3 className="widget-title">Donations</h3>
                                        <p>Distinctio unde consequuntur delectus, repudiandae, impedit atque earum adipisci, explicabo perferendis.</p>
                                        <a href="#" className="button">Make a donation</a>
                                    </div>

                                    <div className="widget">
                                        <h3 className="widget-title">Gallery updates</h3>

                                        <div className="galery-thumb">
                                            <a href="#"><img src="images/gallery-thumb-1.jpg" alt=""/></a>
                                            <a href="#"><img src="images/gallery-thumb-2.jpg" alt=""/></a>
                                            <a href="#"><img src="images/gallery-thumb-3.jpg" alt=""/></a>
                                            <a href="#"><img src="images/gallery-thumb-4.jpg" alt=""/></a>
                                            <a href="#"><img src="images/gallery-thumb-5.jpg" alt=""/></a>
                                            <a href="#"><img src="images/gallery-thumb-6.jpg" alt=""/></a>
                                        </div>
                                    </div>

                                    <div className="widget">
                                        <h3 className="widget-title">Text widget </h3>
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

export default Events;