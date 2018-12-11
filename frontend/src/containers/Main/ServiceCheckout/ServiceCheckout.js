import React, { Component } from 'react';

import './ServiceCheckout.css';

class ServiceCheckout extends Component {

    state = {
        service: '',
        price: 0
    }

    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        for (let param of query.entries()) {
            console.log(param);
            if (param[0] === 'service') {
                this.setState({service: param[1]});
            } else {
                this.setState({price: param[1]});
            }
        }
        console.log(this.props);

    }

    render() {
        return (
            <div>
                <h1>formulario con datos de pago</h1>
                <h3>CheckOut de servicio: <strong>{this.state.service}</strong></h3>
                <h3>Precio de servicio: <strong>{this.state.price}</strong></h3>
                <form className="payment-form">
                    <input className="text-input" type="text" name="name" placeholder="Nombre" />
                    <input className="text-input" type="text" name="lastName" placeholder="Apellido" />
                    <input className="text-input" type="email" name="email" placeholder="Correo" />
                </form>
            </div>
        );
    }
}

export default ServiceCheckout;