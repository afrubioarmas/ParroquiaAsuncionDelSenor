import React, { Component } from 'react';
import * as moment from 'moment';

import axios from '../../../Axios';


class Misas extends Component {

    state = {
        misas: [],
        error: false
    }


   

    render() {


        return (
            <div>
                <h3>Misas</h3>
                <p>Lista de todos los pagos por misas realizados por los usuarios.</p>
            </div>
           
        );
    }
}

export default Misas;