import React from 'react';

const AllEvents = (props) => (

    
    <div className="col-md-12">
        <div className="card">
            <div className="header">
                <h4 className="title">Eventos</h4>
                <p className="category">Lista de todos los eventos existentes.</p>
            </div>
            <div className="content table-responsive table-full-width">
                <table id="eventsTable" className="table table-striped hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Fecha Inicio</th>
                            <th>Fecha Fin</th>
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

export default AllEvents;


 