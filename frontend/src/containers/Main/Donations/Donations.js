import React, { Component } from 'react';
import {withRouter} from 'react-router';

import './Donations.css';

class Donations extends Component {

    state = {
        selectedDonation: ""
    }

    paymentHandler = (donation) => {
        this.props.history.push({
            pathname: '/pago-donacion',
            state: donation
        });
    }

    paymentCancelHandler = () => {
        this.setState({
            paying: false,
            selectedDonation: ""
        });
    }

    render() {
        return (
            <div className="donations">
                <div className="page-head">
                    <div className="container">
                        <h2 className="page-title">Donaciones</h2>
                    </div>
                </div>

                <main className="main-content">
                    <div className="fullwidth-block">
                        <div className="container">
                            <div className="donation-div">
                                <div className="row">
                                    <div className="content col-md-12">
                                        <h2 className="section-title">Parroquia</h2>
                                    </div>
                                </div>
                                <p className="donation-p">
                                    Acción de manera voluntaria que realizan los feligreses 
                                    a la Parroquia mediante entrega de dinero o bienes como un acto 
                                    caritativo para el sostenimiento de la infraestructura y pago del 
                                    personal que presta sus servicios en la Iglesia. La iglesia católica 
                                    en Venezuela depende únicamente del aporte generoso de los feligreses 
                                    que contribuyen económicamente y con generosidad sin esperar ninguna 
                                    exigencia del clero.
                                </p>
                                <div className="row">
                                    <div className="col-md-4 col-sm-6">
                                        
                                            <img className="donation-image" src="images/iglesia.jpg" alt=""></img>
                                        
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        
                                            <img className="donation-image" src="images/main/logo.jpeg" alt=""></img>
                                        
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                       
                                            <img className="donation-image" src="images/honneger.jpg" alt=""></img>
                                        
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button 
                                        className="payment-button" 
                                        onClick={() => this.paymentHandler("Parroquia")}>
                                            Donar
                                    </button>
                                </div>
                            </div>
                            <hr className="p-separator"/>
                            <div className="donation-div">
                                <div className="row">
                                    <div className="content col-md-12">
                                        <h2 className="section-title">Caritas</h2>
                                    </div>
                                </div>
                                <p className="donation-p">
                                    Integrado por voluntarios quienes, en nombre de la comunidad parroquial, 
                                    ejercen el servicio de la caridad acompañando a 120 ancianos que  se encuentran 
                                    en una situación de exclusión social. La mayoría padecen de enfermedades crónicas. 
                                    Reciben el apoyo económico, su alimentación nutritiva y la cobertura de las necesidades básicas, 
                                    con la entrega de alimentos y medicinas, todos los viernes. Horario de 7.am. hasta las 12.m.
                                </p>
                                <div className="row">
                                    <div className="col-md-4 col-sm-6">
                                            <img className="donation-image" src="images/Sección-Código-Caritas-Venezuela-Home.jpg" alt=""></img>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                            <img className="donation-image" src="images/caritas.jpg" alt=""></img>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                            <img className="donation-image" src="images/cumpleanos_caritas1-1.jpg" alt=""></img>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button 
                                        className="payment-button" 
                                        onClick={() => this.paymentHandler("Caritas")}>
                                            Donar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default withRouter(Donations);