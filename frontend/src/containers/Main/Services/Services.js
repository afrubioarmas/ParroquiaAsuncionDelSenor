import React, { Component } from 'react';
import axios from '../../../Axios';

import Modal from '../../../components/Main/UI/Modal/Modal';
import ServiceSummary from '../../../components/Main/ServiceSummary/ServiceSummary';
import Service from '../../../components/Main/Service/Service';

import './Services.css';

class Services extends Component {

    state = {
        paying: false,
        selectedService: "",
        selectedPrice: 0,
        services: [],
        error: false
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
                //console.log(this.state.events);
                //console.log("response" + response );
            } )
            .catch(error => {
                //console.log(error);
                this.setState({error: true});
            });
    }

    paymentHandler = (service, price) => {
        this.setState({
            paying: true,
            selectedService: service,
            selectedPrice: price
        });
    }

    paymentCancelHandler = () => {
        this.setState({
            paying: false,
            selectedService: "",
            selectedPrice: 0
        });
    }

    render() {

        let services = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            services = this.state.services.map(service => {
                return (
                    <Service 
                        key={service.id}
                        name={service.name}
                        information="Informacion"
                        price={service.basePrice}
                        clicked={this.paymentHandler}
                    />
                );
            });
        }

        return (
            <div className="services">
                <Modal show={this.state.paying} modalClosed={this.paymentCancelHandler}>
                    <ServiceSummary service={this.state.selectedService} price={this.state.selectedPrice}/>
                </Modal>
                <div className="page-head">
                    <div className="container">
                        <h2 className="page-title">Servicios</h2>
                    </div>
                </div>

                <main className="main-content">
                    <div className="fullwidth-block">
                        <div className="container">
                            <div className="donation-div">
                                <div className="row">
                                    <div className="content col-md-12">
                                        <h2 className="section-title">Nichos</h2>
                                    </div>
                                </div>
                                <p className="donation-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis arcu id ex commodo, et imperdiet nulla placerat. Fusce tellus enim, eleifend sit amet ex vitae, consequat tempus quam. Etiam nec nisl at justo maximus laoreet in a eros. Cras semper lorem metus, id ultricies dui convallis vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent eu gravida mauris, id dictum tellus. Etiam sed ullamcorper elit, vitae pharetra neque. Fusce facilisis fermentum tincidunt. Maecenas non massa vel arcu porta vehicula. Phasellus quis dui vitae dolor consequat consequat.</p>
                                <div class="row">
                                    <Service 
                                        name="Pago Inicial"
                                        information="Informacion"
                                        price={100}
                                        clicked={this.paymentHandler}
                                    />
                                    <Service 
                                        name="Pago Anual"
                                        information="Informacion"
                                        price={50}
                                        clicked={this.paymentHandler}
                                    />
                                    <Service 
                                        name="Mantenimiento"
                                        information="Informacion"
                                        price={75}
                                        clicked={this.paymentHandler}
                                    />
                                </div>
                            </div>
                            <hr className="p-separator"/>
                            <div className="donation-div">
                                <div className="row">
                                    <div className="content col-md-12">
                                        <h2 className="section-title">Servicios</h2>
                                    </div>
                                </div>
                                <p className="donation-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis arcu id ex commodo, et imperdiet nulla placerat. Fusce tellus enim, eleifend sit amet ex vitae, consequat tempus quam. Etiam nec nisl at justo maximus laoreet in a eros. Cras semper lorem metus, id ultricies dui convallis vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent eu gravida mauris, id dictum tellus. Etiam sed ullamcorper elit, vitae pharetra neque. Fusce facilisis fermentum tincidunt. Maecenas non massa vel arcu porta vehicula. Phasellus quis dui vitae dolor consequat consequat.</p>
                                <div class="row">
                                    {services}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default Services;