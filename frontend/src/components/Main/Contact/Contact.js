import React from 'react';

const contact = () => (

    <React.Fragment>

                <div className="page-head" data-bg-image="images/page-head-1.jpg">
                    <div className="container">
                        <h2 className="page-title">Contacto</h2>
                    </div>
                </div>

                <main className="main-content">
                    <div className="fullwidth-block">
                        <div className="container">
                            <div className="row">
                            <div className="col-md-3">Nuestros telefonos de contacto son...</div>
                            <div className="col-md-3">Nuestros correos de contacto son...</div>
                            <div className="col-md-3">Nuestros horarios de contacto son...</div>
                            <div className="col-md-3">Nuestra direccion es...</div>
                        </div>
                            
                                <div className="row">
                                   
                                    <div className="content">
                                        <ul className="seremon-list large">
                                            <div className="col-md-12">
                                                
                                                <div className="widget">
                                                <div style={{textAlign:'center'}}>Tambien puedes escribirnos directamente mediante el siguiente formulario</div>
                                                    <form action="#" className="contact-form">
                                                        <div className="row">
                                                            <div className="col-md-6"><input type="text" placeholder="Tu Nombre..."/></div>
                                                            <div className="col-md-6"><input type="text" placeholder="Tu correo..."/></div>
                                                        </div>
                                                        <textarea name="" placeholder="Tu mensaje..."></textarea>
                                                        <div className="text-right"><input type="submit" value="Enviar correo"/></div>
                                                    </form>
                                                </div>
                                            </div>
                                        
                                        </ul>
                                    </div>
                                </div>
                        </div>
                    </div>
                </main>
            </React.Fragment> 
);

export default contact;
