import React from 'react';

const editService = (props) => (
    <div className= {props.edit.toggle ? "col-lg-6 col-md-6" : "col-lg-6 col-md-6 disabled"} >
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
                                <input type="text" className="form-control border-input" placeholder="Nombre del servicio" defaultValue={props.edit.name} onChange={(evt) => { props.edit.name = evt.target.value }}/>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Moneda</label>
                                <select defaultValue={props.edit.currency} className="form-control border-input"  onChange={(evt) => { props.edit.currency = evt.target.value }}>
                                    <option>Usd</option>
                                    <option>BsS</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Precio Base</label>
                                <input type="text" className="form-control border-input" placeholder="Precio Base" defaultValue={props.edit.basePrice} onChange={(evt) => { props.edit.basePrice = evt.target.value }}/>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Categoría</label>
                                <select defaultValue={props.edit.category} className="form-control border-input" onChange={(evt) => { props.edit.category = evt.target.value }}>
                                    <option>Misas</option>
                                    <option>Nichos</option>
                                    <option>Sacramentos</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    
                    <div className="text-center">
                        <button type="submit" className="btn btn-info btn-fill btn-wd" onClick={props.handleEdit}>Editar</button>
                    </div>
                    <div className="clearfix"></div>
                </form>
            </div>
        </div>
        
    </div>
  
    
);

export default editService;


