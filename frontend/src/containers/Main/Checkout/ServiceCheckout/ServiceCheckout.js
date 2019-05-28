import React, { Component } from 'react';
import axios from '../../../../Axios';
import moment from 'moment';
import * as emailjs from 'emailjs-com';

import Modal from '../../../../components/Main/UI/Modal/Modal';

import './ServiceCheckout.css';

class ServiceCheckout extends Component {

    state = {
        serviceId: '',
        service: '',
        price: '',
        bank: '',
        name: '',
        email: '',
        id: '',
        transferNumber: '',
        currency: '',
        paymentRegistered: false

    }

    componentWillMount() {
        console.log(this.props.location.state);
        this.setState({
            serviceId: this.props.location.state.serviceId,
            service: this.props.location.state.service,
            price: this.props.location.state.price,
            bank: this.props.location.state.bank
        });
    }

    sendMail = () => {
        var template_params = {
            "reply_to": "reply_to_value",
            "from_name": 'Iglesia',
            "to_name": 'ratuozzo@gmail.com',
            "message_html": 'Se ha realizado un pago de: ' + this.state.service
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

        let data = new FormData();

        data.append('amount', this.state.price);
        data.append('serviceId', this.state.serviceId);
        data.append('name', this.state.name);
        data.append('personalId', this.state.id);
        data.append('date', moment().format('YYYY-MM-DD'));
        data.append('transferNum', this.state.transferNumber);
        data.append('status', "Por Confirmar");
        data.append('email', this.state.email);

        //console.log(moment().format('YYYY-MM-DD'));
        const config = { headers: {'Content-Type': 'multipart/form-data'}}

        axios.put('/payment',data,config)
            .then(response => {
                //handle success
                this.setState({paymentRegistered: true});
                this.sendMail();
                console.log(response);
            })
            .catch(response => {
                //handle error
                //console.log(response);
            });
    }

    inputChangeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    cancelPaymentHandler = () => {
        this.props.history.goBack();
    }

    confirmPaymentHandler = () => {
        this.setState({paymentRegistered: false});
        this.props.history.push({
            pathname: '/pagos'
        });
    }

    render() {

        let thanks = null;

        if (this.state.paymentRegistered) {
            thanks = (
                <div> 
                    <h2>Su pago ha sido registrado</h2>
                    <button className="payment-button col-md-12" onClick={this.confirmPaymentHandler}>Continuar</button>
                </div>
            );
        }

        let bank = null;

        switch(this.state.bank) {
            case 'nichos':
                bank = (
                        <div className="card center-block">
                            <div className="card-content">
                                <h2 className="service-form-title">Datos Bancarios</h2>
                                <h3><strong>Nombre: </strong>Parroquia La Anunciación del Señor</h3>
                                <h3><strong>RIF: </strong>J-307726032</h3>
                                <h3><strong>Banco: </strong>Banco Mercantil</h3>
                                <h3><strong>Nro. Cuenta: </strong>0105-0145-80-1145077951</h3>
                                <h3><strong>Correo: </strong>nichosjardindelaesperanza@gmail.com</h3>
                            </div>
                        </div>
                );
                break;
            case 'parroquia':
                bank = (
                        <div className="card center-block">
                            <div className="card-content">
                                <h2 className="service-form-title">Datos Bancarios</h2>
                                <h3><strong>Nombre: </strong>Parroquia La Anunciación del Señor</h3>
                                <h3><strong>RIF: </strong>J-307726032</h3>
                                <h3><strong>Banco: </strong>Banco Venezolano de Crédito</h3>
                                <h3><strong>Nro. Cuenta: </strong>0104-0026-19-0260061275</h3>
                                <h3><strong>Correo: </strong>iglesialaboyera@gmail.com</h3>
                            </div>
                        </div>
                );
                break;
            default:
                break;
        }


        return (
            <div className="service-payment-wrapper">
            <Modal show={this.state.paymentRegistered} modalClosed={this.cancelPaymentHandler}>
                {thanks}
            </Modal>
                <div className="page-head" data-bg-image="images/page-head-1.jpg">
                    <div className="container">
                        <h2 className="page-title">Pago Servicio</h2>
                    </div>
                </div>
                <div>
                    <div className="row">
                        {bank}
                    </div>
                    <div className="service-form">
                        <div className="container">
                            <h3 className="service-form-title">Introduzca los datos de la transferencia</h3>
                            <form className="cf">
                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="text" name="name" placeholder="Nombre" value={this.state.name} onChange={this.inputChangeHandler}/>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="number" name="id" placeholder="Cédula" value={this.state.id} onChange={this.inputChangeHandler}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="text" name="email" placeholder="Correo" value={this.state.email} onChange={this.inputChangeHandler}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <input type="number" name="price" placeholder="Monto" value={this.state.price} onChange={this.inputChangeHandler}/>
                                    </div>
                                    <div className="col-md-2">
                                        <select defaultValue="Moneda" name="currency" onChange={this.inputChangeHandler}>
                                            <option >Moneda</option>
                                            <option value="Usd">Usd</option>
                                            <option value="BsS">BsS</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="number" name="transferNumber" placeholder="Numero de transferencia" value={this.state.transferNumber} onChange={this.inputChangeHandler}/>
                                    </div>
                                </div>
                                <button className="payment-button" onClick={this.paymentHandler}>Pagar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ServiceCheckout;