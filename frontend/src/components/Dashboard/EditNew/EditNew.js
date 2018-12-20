import React, { Component } from 'react';

class EditNew extends Component {

    state = {content: this.props.edit.content};

    handleChangeContent(event) {
        this.setState({content: event.target.value});
        this.props.edit.content=event.target.value;
    }

    componentWillReceiveProps(NextProps){

        this.setState({content: NextProps.edit.content});

    }

    render(){

        return(
            <div className= {this.props.edit.toggle ? "col-lg-6 col-md-6" : "col-lg-6 col-md-6 disabled"}>
                <div className="card">
                    <div className="header">
                        <h4 className="title">Editar Noticia</h4>
                    </div>
                    <div className="content">
                        <form>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Titulo</label>
                                        <input type="text" className="form-control border-input" placeholder="Titulo de la noticia" defaultValue={this.props.edit.title} onChange={(evt) => { this.props.edit.title = evt.target.value }}/>
                                    </div>
                                </div>
                            </div>

                        <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Contenido</label>
                                        <textarea rows="5" className="form-control border-input" placeholder="Contenido de la noticia" value={this.state.content} onChange={this.handleChangeContent }>
                                        </textarea>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Imagen</label>
                                        <input type="text" className="form-control border-input" placeholder="Subir imagen" defaultValue={this.props.edit.image} onChange={(evt) => { this.props.edit.image = evt.target.value }}/>
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

export default EditNew;


