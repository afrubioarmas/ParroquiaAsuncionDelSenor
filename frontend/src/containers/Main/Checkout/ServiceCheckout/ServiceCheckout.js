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
        currency: 'Bs'

    }

    componentWillMount() {
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
        data.append('name', this.state.name + ' ' + this.state.lastName);
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
            <div className="service-payment">
                <div className="page-head" data-bg-image="images/page-head-1.jpg">
                    <div className="container">
                        <h2 className="page-title">Pago Servicio</h2>
                    </div>
                </div>
                <h4>Nombre de servicio: {this.state.service}</h4>
                <h4>Precio base: {this.state.price}</h4>
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
                        <h3 className="service-form-title">Si ya realizó la transferencia, introduzca sus datos</h3>
                        <form className="cf">
                            <div className="half left cf">
                                <input type="text" name="name" placeholder="Nombre" value={this.state.name} onChange={this.inputChangeHandler}/>
                                <input type="text" name="lastName" placeholder="Apellido" value={this.state.lastName} onChange={this.inputChangeHandler}/>
                                <input type="number" name="id" placeholder="Cédula" value={this.state.id} onChange={this.inputChangeHandler}/>
                                <input type="number" name="price" placeholder="Monto" value={this.state.price} onChange={this.inputChangeHandler}/>
                                <input type="number" name="transferNumber" placeholder="Numero de transferencia" value={this.state.transferNumber} onChange={this.inputChangeHandler}/>
                            </div>
                            <div className="half right cf">
                                <textarea name="description" type="text" placeholder="Descripcion (Opcional)" value={this.state.description} onChange={this.inputChangeHandler}></textarea>
                            </div>  
                            <button className="payment-button" onClick={this.paymentHandler}>Donar</button>
                        </form>
                    </div>
                        <button className="payment-button" onClick={this.cancelPaymentHandler}>Cancelar</button>
                </div>
            </div>
        );
    }
}

export default ServiceCheckout;