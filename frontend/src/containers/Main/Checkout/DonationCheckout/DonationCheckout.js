import React, { Component } from 'react';
import axios from '../../../../Axios';
import moment from 'moment';

import Modal from '../../../../components/Main/UI/Modal/Modal';

import './DonationCheckout.css';

class DonationCheckout extends Component {

    state = {
        donation: '',
        price: '',
        name: '',
        email: '',
        transferNumber: '',
        description: '',
        currency: '',
        donationRegistered: false,
        error: false

    }

    componentWillMount() {
        this.setState({
            donation: this.props.location.state
            });
    }

    paymentHandler= (e) =>{
        e.preventDefault();

        console.log(this.state.currency);

        let data = new FormData();

        data.append('name', this.state.name);
        data.append('email', this.state.email);
        data.append('amount', this.state.price);
        data.append('description', this.state.description);
        data.append('purpose', this.state.donation);
        data.append('currency', this.state.currency);
        data.append('date', moment().format('YYYY-MM-DD'));
        data.append('transferNum', this.state.transferNumber);
        data.append('status', 'Por Confirmar');

        const config = { headers: {'Content-Type': 'multipart/form-data'}}

        axios.put('/donation',data,config)
            .then(response => {
                //handle success
                this.setState({donationRegistered: true});
                console.log(response);
            })
            .catch(response => {
                //handle error
                this.setState({error: true});
                console.log(response);
            });
    }

    inputChangeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    cancelDonationHandler = () => {
        this.setState({donationRegistered: false});
        this.props.history.goBack();
    }

    confirmDonationHandler = () => {
        this.props.history.push({
            pathname: '/'
        });
    }

    render() {

        let thanks = null;

        if (this.state.donationRegistered) {
            thanks = (
                <div> 
                    <h2>Gracias por realizar la donación</h2>
                    <button className="payment-button col-md-12" onClick={this.confirmDonationHandler}>Continuar</button>
                </div>
            );
        }

        return (
            <div className="donation-payment-wrapper">
                <Modal show={this.state.donationRegistered} modalClosed={this.cancelDonationHandler}>
                    {thanks}
                </Modal>
                <div className="donation-payment">
                    <div className="page-head" data-bg-image="images/page-head-1.jpg">
                        <div className="container">
                            <h2 className="page-title">Donación</h2>
                        </div>
                    </div>
                    <div>
                        <div className="row">
                            <div className="column">
                                <div className="card">
                                    <p>Banco 1</p>
                                </div>
                            </div>
                            <div className="column">
                                <div className="card">
                                    <p>Banco 2</p>
                                </div>
                            </div>
                            <div className="column">
                                <div className="card">
                                    <p>Banco 2</p>
                                </div>
                            </div>
                        </div>
                        <div className="donation-form">
                            <div className="container">
                                <h3 className="donation-form-title">Introduzca los datos de la transferencia</h3>
                                <form className="cf">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <input type="text" name="name" placeholder="Nombre" value={this.state.name} onChange={this.inputChangeHandler}/>
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" name="email" placeholder="Correo" value={this.state.email} onChange={this.inputChangeHandler}/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <input type="number" name="price" placeholder="Monto" value={this.state.price} onChange={this.inputChangeHandler}/>
                                        </div>
                                        <div className="col-md-2">
                                            <select defaultValue="Moneda" name="currency" onChange={this.inputChangeHandler}>
                                                <option>Moneda</option>
                                                <option value="Usd">Usd</option>
                                                <option value="BsS">BsS</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6">
                                            <input type="number" name="transferNumber" placeholder="Numero de transferencia" value={this.state.transferNumber} onChange={this.inputChangeHandler}/>
                                        </div>
                                    </div>
                                    <textarea name="description" type="text" placeholder="Descripcion (Opcional)" value={this.state.description} onChange={this.inputChangeHandler}></textarea>
                                    <button className="payment-button" onClick={this.paymentHandler}>Donar</button>
                                </form>
                            </div>         
                        </div>
                    </div>
                </div>
            </div>
                
        );
    }
}

export default DonationCheckout;