import React, { Component } from 'react';

import TopNav from '../../../components/Dashboard/TopNav/TopNav';


class Users extends Component {
    render() {
        return (
            <div className="main-panel">
                <TopNav title={"Administración de usuarios"}/>
                <div className="content">
                    Hola usuarios
                </div>
            </div>
           
        );
    }
}

export default Users;