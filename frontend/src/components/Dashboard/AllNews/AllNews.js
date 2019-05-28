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
                                <th>Titulo</th>
                                <th style={{width:'50%'}}>Contenido</th>
                                <th>Imagen</th>
                                <th>Fecha</th>
                                <th style={{width:'10%'}}></th>
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


 