import React from 'react';

const createEvent = (props) => {
    
    return(

        <div className="col-lg-6 col-md-6">
            <div className="card">
                <div className="header">
                    <h4 className="title">Crear Evento</h4>
                </div>
                <div className="content">
                    <form>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Nombre</label>
                                    <input type="text" className="form-control border-input" placeholder="Nombre del envento" onChange={(evt) => { props.create.name = evt.target.value }}/>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Fecha Inicio</label>
                                    <input type="text" className="form-control border-input" placeholder="Fecha inicio" onChange={(evt) => { props.create.startDate = evt.target.value }}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Fecha Fin</label>
                                    <input type="text" className="form-control border-input" placeholder="Fecha fin" onChange={(evt) => { props.create.endDate = evt.target.value }}/>
                                </div>
                            </div>
                        </div>

                        
                        <div className="text-center">
                            <button type="submit" className="btn btn-info btn-fill btn-wd" onClick={props.handleCreate}>Crear</button>
                        </div>
                        <div className="clearfix"></div>
                    </form>
                </div>
            </div>
            
        </div>
  
    
    );

}

export default createEvent;


