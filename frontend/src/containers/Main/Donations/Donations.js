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
                                <p className="donation-p">Las donaciones de la parroquia son para bla bla bla y van dirigidas a blab blab bal.</p>
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
                                <p className="donation-p">Las donaciones de Caritas son para bla bla bla y van dirigidas a blab blab bal.</p>
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