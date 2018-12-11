import React from 'react';

const AllNews = (props) => (

    <div className="row">
        <div className="col-md-12">
            <div className="card">
                <div className="header">
                    <h4 className="title">Noticias</h4>
                    <p className="category">Lista de todos las noticias existentes.</p>
                </div>
                <div className="content table-responsive table-full-width">
                    <table id="newsTable" className="table table-striped hover">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Titulo</th>
                                <th>Contenido</th>
                                <th>Imagen</th>
                                <th>Video</th>
                                <th>Fecha</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.children}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

);

export default AllNews;


 