import React, { Component } from 'react';
import * as moment from 'moment';

import axios from '../../../Axios';


class Sacramentos extends Component {

    state = {
        sacramentos: [],
        error: false
    }


   

    render() {


        return (
            <div>
                <h3>Sacramentos</h3>
                <p>Lista de todos los pagos por Sacramentos realizados por los usuarios.</p>
            </div>
           
        );
    }
}

export default Sacramentos;