import React, { Component } from 'react';
import axios from '../../../Axios';
import {withRouter} from 'react-router';

import Modal from '../../../components/Main/UI/Modal/Modal';
import ServiceSummary from '../../../components/Main/PaymentSummary/ServiceSummary';
import Service from '../../../components/Main/Service/Service';

import './Services.css';

class Services extends Component {

    state = {
        selectedServiceId: '',
        paying: false,
        selectedService: "",
        selectedPrice: 0,
        selectedCurrency: "",
        selectedBank: "",
        sacramentos: [],
        nichos: [],
        misas: [],
        error: false
    }

    componentDidMount () {
        //console.log(this.props);
        axios.get( '/serviceByCategory/Nichos' )
            .then( response => {
                const nichos = response.data;
                const updatedNichos = nichos.map(nicho => {
                    return {
                        ...nicho
                    }
                });
                this.setState({nichos: updatedNichos}); 
                //console.log(this.state.events);
                //console.log("response" + response );
            } )
            .catch(error => {
                //console.log(error);
                this.setState({error: true});
            });
            axios.get( '/serviceByCategory/Sacramentos' )
            .then( response => {
                const sacramentos = response.data;
                const updatedSacramentos = sacramentos.map(sacramento => {
                    return {
                        ...sacramento
                    }
                });
                this.setState({sacramentos: updatedSacramentos}); 
                //console.log(this.state.events);
                //console.log("response" + response );
            } )
            .catch(error => {
                //console.log(error);
                this.setState({error: true});
            });
            axios.get( '/serviceByCategory/Misas' )
            .then( response => {
                const misas = response.data;
                const updatedMisas = misas.map(misa => {
                    return {
                        ...misa
                    }
                });
                this.setState({misas: updatedMisas}); 
                //console.log(this.state.events);
                //console.log("response" + response );
            } )
            .catch(error => {
                //console.log(error);
                this.setState({error: true});
            });
    }

    paymentHandler = (serviceId, service, price, currency, bank) => {
        console.log(serviceId, service, price, currency, bank);
        this.setState({
            paying: true,
            selectedServiceId: serviceId,
            selectedService: service,
            selectedPrice: price,
            selectedCurrency: currency,
            selectedBank: bank
        });
    }

    paymentCancelHandler = () => {
        this.setState({
            paying: false,
            selectedService: "",
            selectedPrice: 0,
            accepted: false
        });
    }

    acceptPaymentHandler = () => {
            this.props.history.push({
                pathname: '/pago-servicio',
                state: {
                    serviceId: this.state.selectedServiceId,
                    service: this.state.selectedService,
                    price: this.state.selectedPrice,
                    bank: this.state.selectedBank
                }
            });
        //console.log(this.state);
    }

    formatNumber = () => {
        return this.state.selectedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    render() {

        let nichos = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            nichos = this.state.nichos.map(nicho => {
                return (
                    <Service 
                        key={nicho.id}
                        id={nicho.id}
                        name={nicho.name}
                        price={nicho.basePrice}
                        currency={nicho.currency}
                        bank='nichos'
                        clicked={this.paymentHandler}
                    />
                );
            });
        }
        let sacramentos = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            sacramentos = this.state.sacramentos.map(sacramento => {
                return (
                    <Service 
                        key={sacramento.id}
                        id={sacramento.id}
                        name={sacramento.name}
                        price={sacramento.basePrice}
                        currency={sacramento.currency}
                        bank='parroquia'
                        clicked={this.paymentHandler}
                    />
                );
            });
        }
        let misas = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            misas = this.state.misas.map(misa => {
                return (
                    <Service 
                        key={misa.id}
                        id={misa.id}
                        name={misa.name}
                        price={misa.basePrice}
                        currency={misa.currency}
                        bank='parroquia'
                        clicked={this.paymentHandler}
                    />
                );
            });
        }

        let summary = (
            <div>
                <ServiceSummary 
                    serviceId={this.state.selectedServiceId}
                    service={this.state.selectedService} 
                    price={this.formatNumber()}
                    currency={this.state.selectedCurrency}
                    />
                <p>
                    Para registrar el pago es necesario un previo acuerdo con la Iglesia para confirmar el
                    servicio a pagar, si no existe este previo acuerdo no aseguramos la prestación del servicio.
                </p>
                <button className="payment-button" onClick={this.acceptPaymentHandler}>Si hablé con la iglesia</button>
            </div>
        );
        if (this.state.accepted) {
            summary = <ServiceSummary 
                serviceId={this.state.selectedServiceId}
                service={this.state.selectedService} 
                price={this.state.selectedPrice}
                currency={this.state.selectedCurrency}
                clicked={this.acceptPaymentHandler} />;
        }

        return (
            <div className="services">
                <Modal show={this.state.paying} modalClosed={this.paymentCancelHandler}>
                    {summary}
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
                                <p className="donation-p">
                                    Lugar para darle santa sepultara a los restos
                                    mortales cremados, conocidos como “Cenizas” de los difuntos, de
                                    acuerdo a la jurisdicción donde habita.<br/> Encargada: María Carolina
                                    Rodríguez. Teléfono: 0414 – 263 52 20 y 0212 - 963 17 57.
                                </p>
                                <div className="row">
                                    {nichos}
                                </div>
                            </div>
                            <hr className="p-separator"/>
                            <div className="donation-div">
                                <div className="row">
                                    <div className="content col-md-12">
                                        <h2 className="section-title">Sacramentos</h2>
                                    </div>
                                </div>
                                <p className="donation-p">
                                    La Iglesia siempre está presta y dispuesta para celebrar todos los Sacramentos de forma gratuita. 
                                    Los Sacramentos: Eucaristías, Matrimonios, Bautizos, Primeras Comuniones y Confirmaciones, 
                                    no tienen ni tendrán, costo alguno. Es un servicio que se presta de forma gratuita. 
                                    Ahora bien, los feligreses antes de administrar los sacramentos ofrecen libremente un aporte que 
                                    permite el sostenimiento de la planta física y el pago del personal que trabaja en la Parroquia.
                                </p>
                                <div className="row">
                                    {sacramentos}
                                </div>
                            </div>
                            <hr className="p-separator"/>
                            <div className="donation-div">
                                <div className="row">
                                    <div className="content col-md-12">
                                        <h2 className="section-title">Misas</h2>
                                    </div>
                                </div>
                                <p className="donation-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis arcu id ex commodo, et imperdiet nulla placerat. Fusce tellus enim, eleifend sit amet ex vitae, consequat tempus quam. Etiam nec nisl at justo maximus laoreet in a eros. Cras semper lorem metus, id ultricies dui convallis vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent eu gravida mauris, id dictum tellus. Etiam sed ullamcorper elit, vitae pharetra neque. Fusce facilisis fermentum tincidunt. Maecenas non massa vel arcu porta vehicula. Phasellus quis dui vitae dolor consequat consequat.</p>
                                <div className="row">
                                    {misas}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default withRouter(Services);