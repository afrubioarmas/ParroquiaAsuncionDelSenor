import React from 'react';
import {NavLink} from 'react-router-dom';

const editEvent = (props) => (
    <div className="col-lg-6 col-md-5">
        <div className="card">
            <div className="header">
                <h4 className="title">Editar Evento</h4>
            </div>
            <div className="content">
                <form>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Nombre</label>
                                <input type="text" className="form-control border-input" placeholder="Nombre del envento"/>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Fecha Inicio</label>
                                <input type="text" className="form-control border-input" placeholder="Fecha inicio" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Fecha Fin</label>
                                <input type="text" className="form-control border-input" placeholder="Fecha fin"/>
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

export default editEvent;


