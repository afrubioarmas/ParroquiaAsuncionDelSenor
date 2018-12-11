import React from 'react';

const AllServices = (props) => (

    
    <div className="col-md-12">
        <div className="card">
            <div className="header">
                <h4 className="title">Servicios</h4>
                <p className="category">Lista de todos los Servicios existentes.</p>
            </div>
            <div className="content table-responsive table-full-width">
                <table id="servicesTable" className="table table-striped hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Moneda</th>
                            <th>Precio Base</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.children}
                    </tbody>
                </table>
            </div>
        </div>
    </div>

);

export default AllServices;


 