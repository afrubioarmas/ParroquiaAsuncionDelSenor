import React from 'react';

const footer = () => (

    <footer className="site-footer">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="widget">
                        <h3 className="widget-title">Our address</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi perspiciatis magnam, ab ipsa laboriosam tempore tenetur, aliquid repellat, ex cum dicta reiciendis accusamus. Omnis repudiandae quasi mollitia, iusto odio dignissimos.</p>
                        <ul className="address">
                            <li><i className="fa fa-map-marker"></i> 329 Church St, Garland, TX 75042</li>
                            <li><i className="fa fa-phone"></i> (425) 853 442 552</li>
                            <li><i className="fa fa-envelope"></i> info@yourchurch.com</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="widget">
                        <h3 className="widget-title">Topics from last meeting</h3>
                        <ul className="bullet">
                            <li><a href="">Lorem ipsum dolor sit amet</a></li>
                            <li><a href="">Consectetur adipisicing elit quis nostrud</a></li>
                            <li><a href="">Eiusmod tempor incididunt ut labore et dolore magna</a></li> 
                            <li><a href="">Ut enim ad minim veniam cillum</a></li>
                            <li><a href="">Exercitation ullamco laboris nisi ut aliquip</a></li> 
                            <li><a href="">Duis aute irure dolor in reprehenderit in voluptate</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="widget">
                        <h3 className="widget-title">Contact form</h3>
                        <form action="#" className="contact-form">
                            <div className="row">
                                <div className="col-md-6"><input type="text" placeholder="Your name..."/></div>
                                <div className="col-md-6"><input type="text" placeholder="Email..."/></div>
                            </div>
                            
                            <textarea name="" placeholder="Your message..."></textarea>
                            <div className="text-right"><input type="submit" value="Send message"/></div>
                            
                        </form>
                    </div>
                </div>
            </div>

            <p className="colophon">Copyright 2014 True Church. All right reserved</p>
        </div>
    </footer> 

);

export default footer;