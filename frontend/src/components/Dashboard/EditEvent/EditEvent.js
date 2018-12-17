import React, { Component } from 'react';

class EditEvent extends Component {
  

    render(){
        return(
            <div className= {this.props.edit.toggle ? "col-lg-6 col-md-6" : "col-lg-6 col-md-6 disabled"}>
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
                                        <input type="text" className="form-control border-input" placeholder="Nombre del envento" defaultValue={this.props.edit.name} onChange={(evt) => { this.props.edit.name = evt.target.value }}/>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Fecha Inicio</label>
                                        <input type="text" className="form-control border-input" placeholder="Fecha inicio" defaultValue={this.props.edit.startDate} onChange={(evt) => { this.props.edit.startDate = evt.target.value }}/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Fecha Fin</label>
                                        <input type="text" className="form-control border-input" placeholder="Fecha fin" defaultValue={this.props.edit.endDate} onChange={(evt) => { this.props.edit.endDate = evt.target.value }}/>
                                    </div>
                                </div>
                            </div>

                            
                            <div className="text-center">
                                <button type="submit" className="btn btn-info btn-fill btn-wd" onClick={this.props.handleEdit}>Editar</button>
                            </div>
                            <div className="clearfix"></div>
                        </form>
                    </div>
                </div>
                
            </div>
        );
    }
}
export default EditEvent;


