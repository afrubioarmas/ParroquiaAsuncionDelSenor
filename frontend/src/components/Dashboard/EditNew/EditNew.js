import React from 'react';

const editNew = (props) => (
    <div className= {props.edit.toggle ? "col-lg-6 col-md-6" : "col-lg-6 col-md-6 disabled"}>
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
                                <input type="text" className="form-control border-input" placeholder="Titulo de la noticia" value={props.edit.title} onChange={(evt) => { props.edit.title = evt.target.value }}/>
                            </div>
                        </div>
                    </div>

                   <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Contenido</label>
                                <textarea rows="5" className="form-control border-input" placeholder="Contenido de la noticia" value={props.edit.content} onChange={(evt) => { props.edit.content = evt.target.value }}>
                                </textarea>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Imagen</label>
                                <input type="text" className="form-control border-input" placeholder="Subir imagen" value={props.edit.image} onChange={(evt) => { props.edit.image = evt.target.value }}/>
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

export default editNew;


