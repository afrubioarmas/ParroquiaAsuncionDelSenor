import React from 'react';

const editService = (props) => (
    <div className="col-lg-6 col-md-6">
        <div className="card">
            <div className="header">
                <h4 className="title">Editar Servicio</h4>
            </div>
            <div className="content">
                <form>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Nombre</label>
                                <input type="text" className="form-control border-input" placeholder="Nombre del servicio"/>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Moneda</label>
                                <input type="text" className="form-control border-input" placeholder="Moneda" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Precio Base</label>
                                <input type="text" className="form-control border-input" placeholder="Precio Base"/>
                            </div>
                        </div>
                    </div>

                    
                    <div className="text-center">
                        <button type="submit" className="btn btn-info btn-fill btn-wd">Editar</button>
                    </div>
                    <div className="clearfix"></div>
                </form>
            </div>
        </div>
        
    </div>
  
    
);

export default editService;


