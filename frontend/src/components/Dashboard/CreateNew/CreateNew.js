import React from 'react';

const createNew = (props) => (
    <div className="col-lg-6 col-md-6">
        <div className="card">
            <div className="header">
                <h4 className="title">Crear Noticia</h4>
            </div>
            <div className="content">
                <form>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Titulo</label>
                                <input type="text" className="form-control border-input" placeholder="Titulo de la noticia"/>
                            </div>
                        </div>
                    </div>

                   <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Contenido</label>
                                <textarea rows="5" className="form-control border-input" placeholder="Contenido de la noticia">
                                </textarea>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Imagen</label>
                                <input type="text" className="form-control border-input" placeholder="Subir imagen"/>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Video</label>
                                <input type="text" className="form-control border-input" placeholder="Subir video"/>
                            </div>
                        </div>
                    </div>

                    
                    <div className="text-center">
                        <button type="submit" className="btn btn-info btn-fill btn-wd">Crear</button>
                    </div>
                    <div className="clearfix"></div>
                </form>
            </div>
        </div>
        
    </div>
  
    
);

export default createNew;


