import React, { Component } from 'react';
import axios from '../../../../Axios';
import moment from 'moment';

import './DonationCheckout.css';

class DonationCheckout extends Component {

    state = {
        donation: '',
        price: '',
        name: '',
        lastName: '',
        transferNumber: '',
        description: '',
        currency: 'Bs'

    }

    componentWillMount() {
        this.setState({
            donation: this.props.location.state
            });
    }

    paymentHandler= (e) =>{
        e.preventDefault();

        let data = new FormData();

        data.append('name', this.state.name + ' ' + this.state.lastName);
        data.append('amount', this.state.price);
        data.append('description', this.state.description);
        data.append('purpose', this.state.donation);
        data.append('currency', this.state.currency);
        data.append('date', moment().format('YYYY-MM-DD'));

        //console.log(moment().format('YYYY-MM-DD'));
        const config = { headers: {'Content-Type': 'multipart/form-data'}}

        axios.put('/donation',data,config)
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

    cancelDonationHandler = () => {
        this.props.history.goBack();
    }

    render() {
        return (
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
                        <h3 className="donation-form-title">Si ya realizó la transferencia, introduzca sus datos</h3>
                        <form className="cf">
                            <div className="half left cf">
                                <input type="text" name="name" placeholder="Nombre" value={this.state.name} onChange={this.inputChangeHandler}/>
                                <input type="text" name="lastName" placeholder="Apellido" value={this.state.lastName} onChange={this.inputChangeHandler}/>
                                <input type="number" name="price" placeholder="Monto" value={this.state.price} onChange={this.inputChangeHandler}/>
                                <input type="number" name="transferNumber" placeholder="Numero de transferencia" value={this.state.transferNumber} onChange={this.inputChangeHandler}/>
                            </div>
                            <div className="half right cf">
                                <textarea name="description" type="text" placeholder="Descripcion (Opcional)" value={this.state.description} onChange={this.inputChangeHandler}></textarea>
                            </div>  
                            <button className="payment-button" onClick={this.paymentHandler}>Donar</button>
                        </form>
                    </div>
                        <button className="payment-button" onClick={this.cancelDonationHandler}>Cancelar</button>
                </div>
            </div>
        );
    }
}

export default DonationCheckout;