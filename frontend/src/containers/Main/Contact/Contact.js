import React, {Component} from 'react';
import * as emailjs from 'emailjs-com';

import Modal from '../../../components/Main/UI/Modal/Modal';

import './Contact.css';

class Contact extends Component {

    state = {
        name: '',
        email: '',
        content: '',
        sending: false,
        sent: false,
        modal: false,
        error: false
    }

    sentMessageHandler = (e) => {
        e.preventDefault();
        this.setState({sending: true, modal: true});

        var template_params = {
            "reply_to": "reply_to_value",
            "from_name": this.state.name + '(' + this.state.email + ')',
            "to_name": "ratuozzo@gmail.com",
            "message_html": this.state.content
         }
         
         var service_id = "default_service";
         var template_id = "template_Oz3iTuaa";
         emailjs.send(service_id,template_id,template_params,'user_AqEQMEXCf7JxMP3QGWJRy')
            .then(response => {
                console.log('Mensaje enviado:' + response);
                this.setState({sending: false, sent: true});
            })
            .catch(error => {
                this.setState({sending: false, error: true});
                console.log(error);
            });
    }

    inputChangeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    closeModalHandler = () => {
        this.setState({sending: false, sent: false, error: false, modal: false});
    }

    render() {

        let message = null;
        if (this.state.sending) {
            message = (
                <div>
                    <h3>Enviando correo</h3>
                </div>
            );
        }

        if (this.state.sent) {
            message = (
                <div>
                    <h3>Correo enviado con éxito!</h3>
                    <button className="contact-button" onClick={this.closeModalHandler}>Aceptar</button>
                </div>
            );
        }

        if (this.state.error) {
            message = (
                <div>
                    <h3>Ocurrió un problema enviando el correo, intente nuevamente</h3>
                    <button className="contact-button" onClick={this.closeModalHandler}>Aceptar</button>
                </div>
            );
        }

        return (
            <div className="contact-wrapper">
                <Modal show={this.state.modal} modalClosed={this.closeModalHandler}>
                    {message}
                </Modal>
                <div className="page-head" data-bg-image="images/page-head-1.jpg">
                    <div className="container">
                        <h2 className="page-title">Contacto</h2>
                    </div>
                </div>
                <div className="row contact-cards">
                    <div className="column">
                        <div className="card">
                            <h3 className="contact-card-title">Dirección</h3>
                            <span className="ti-map-alt contact-icons"></span>
                            <h4>Calle La Boyera, Urbanización La Boyera, Parroquia La Anunciación del Señor</h4>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <h3 className="contact-card-title">Teléfono</h3>
                            <span className="ti-mobile contact-icons"></span>
                            <h4>0212-9637829</h4>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <h3 className="contact-card-title">Correo</h3>
                            <span className="ti-email contact-icons"></span>
                            <h4>parroquialaboyera@gmail.com</h4>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <h3 className="contact-card-title">Horario</h3>
                            <span className="ti-timer contact-icons"></span>
                            <h4>Lunes - Viernes</h4>
                            <h4>9:00 am - 4:00 pm</h4>
                        </div>
                    </div>
                </div>
                <div className="contact-form">
                    <div className="container">
                        <h3 className="contact-form-title">También puede contactarnos a través del siguiente formulario</h3>
                        <form className="cf">
                            <div className="row">
                                <div className="col-md-6">
                                    <input type="text" name="name" placeholder="Nombre" onChange={this.inputChangeHandler}/>
                                </div>
                                <div className="col-md-6">
                                    <input type="text" name="email" placeholder="Correo" onChange={this.inputChangeHandler}/>
                                </div>
                            </div>
                            <textarea type="text" name="content" placeholder="Descripcion (Opcional)" onChange={this.inputChangeHandler}></textarea>
                            <button className="payment-button" onClick={this.sentMessageHandler}>Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;