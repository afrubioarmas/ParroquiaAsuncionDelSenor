import React, { Component } from 'react';
import axios from '../../../../Axios';
import moment from 'moment';
import * as emailjs from 'emailjs-com';

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

    sendMail = () => {
        var template_params = {
            "reply_to": "reply_to_value",
            "from_name": 'Iglesia',
            "to_name": 'ratuozzo@gmail.com',
            "message_html": 'Se ha recibido una donación a: ' + this.state.donation
         }
         
         var service_id = "default_service";
         var template_id = "template_Oz3iTuaa";
         emailjs.send(service_id,template_id,template_params,'user_AqEQMEXCf7JxMP3QGWJRy')
            .then(response => {
                console.log('Mensaje enviado:' + response);
            })
            .catch(error => {
                console.log(error);
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
                this.sendMail();
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
            pathname: '/donaciones'
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

        let bank = null;

        switch(this.state.donation) {
            case 'Parroquia':
                bank = (
                        <div className="card center-block">
                            <div className="card-content">
                                <h2 className="donation-form-title">Datos Bancarios</h2>
                                <h3><strong>Nombre: </strong>Parroquia La Anunciación del Señor</h3>
                                <h3><strong>RIF: </strong>J-307726032</h3>
                                <h3><strong>Banco: </strong>Banco Venezolano de Crédito</h3>
                                <h3><strong>Nro. Cuenta: </strong>0104-0026-19-0260061275</h3>
                                <h3><strong>Correo: </strong>iglesialaboyera@gmail.com</h3>
                            </div>
                        </div>
                );
                break;
            case 'Caritas':
                bank = (
                        <div className="card center-block">
                            <div className="card-content">
                                <h3 className="donation-form-title">Datos Bancarios</h3>
                                <h3><strong>Nombre: </strong>Parroquia La Anunciación del Señor</h3>
                                <h3><strong>RIF: </strong>J-307726032</h3>
                                <h3><strong>Banco: </strong>Banco Banesco</h3>
                                <h3><strong>Nro. Cuenta: </strong>0134-0185-37-1851026060</h3>
                                <h3><strong>Correo: </strong>iglesialaboyera@gmail.com</h3>
                            </div>
                        </div>
                );
                break;
            default:
                break;
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
                            {bank}
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