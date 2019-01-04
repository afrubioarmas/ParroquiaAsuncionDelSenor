import React, { Component } from 'react';
import axios from '../../../../Axios';
import moment from 'moment';

import './ServiceCheckout.css';

class ServiceCheckout extends Component {

    state = {
        serviceId: '',
        service: '',
        price: '',
        name: '',
        lastName: '',
        id: '',
        transferNumber: '',
        description: '',
        currency: ''

    }

    componentWillMount() {
        console.log(this.props.location.state);
        this.setState({
            serviceId: this.props.location.state.serviceId,
            service: this.props.location.state.service,
            price: this.props.location.state.price
        });
    }

    paymentHandler= (e) =>{
        e.preventDefault();

        let data = new FormData();

        data.append('serviceId', this.state.serviceId);
        data.append('name', this.state.name);
        data.append('personalId', this.state.id);
        data.append('amount', this.state.price);
        data.append('date', moment().format('YYYY-MM-DD'));

        //console.log(moment().format('YYYY-MM-DD'));
        const config = { headers: {'Content-Type': 'multipart/form-data'}}

        axios.put('/payment',data,config)
            .then(response => {
                //handle success
                console.log(response);
            })
            .catch(response => {
                //handle error
                console.log(response);
            });
    }

    inputChangeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    cancelPaymentHandler = () => {
        this.props.history.goBack();
    }

    render() {
        return (
            <div className="service-payment-wrapper">
                <div className="page-head" data-bg-image="images/page-head-1.jpg">
                    <div className="container">
                        <h2 className="page-title">Pago Servicio</h2>
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
                    <div className="service-form">
                        <div className="container">
                            <h3 className="service-form-title">Introduzca los datos de la transferencia</h3>
                            <form className="cf">
                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="text" name="name" placeholder="Nombre" onChange={this.inputChangeHandler}/>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="number" name="id" placeholder="Cédula" onChange={this.inputChangeHandler}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="text" name="email" placeholder="Correo" onChange={this.inputChangeHandler}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <input type="number" name="price" placeholder="Monto"onChange={this.inputChangeHandler}/>
                                    </div>
                                    <div className="col-md-2">
                                        <select defaultValue="Moneda" name="currency" onChange={this.inputChangeHandler}>
                                            <option >Moneda</option>
                                            <option value="Usd">Usd</option>
                                            <option value="BsS">BsS</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="number" name="transferNumber" placeholder="Numero de transferencia" onChange={this.inputChangeHandler}/>
                                    </div>
                                </div>
                                <textarea name="description" type="text" placeholder="Descripcion (Opcional)" onChange={this.inputChangeHandler}></textarea>
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