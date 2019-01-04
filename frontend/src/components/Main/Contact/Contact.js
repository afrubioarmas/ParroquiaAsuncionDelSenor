import React from 'react';

import './Contact.css';

const contact = () => (
    <div className="contact-wrapper">
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
                    <textarea name="description" type="text" placeholder="Descripcion (Opcional)" onChange={this.inputChangeHandler}></textarea>
                    <button className="payment-button" onClick={this.paymentHandler}>Enviar</button>
                </form>
            </div>
        </div>
    </div>
);

export default contact;
