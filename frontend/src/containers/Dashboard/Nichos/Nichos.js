import React, { Component } from 'react';
import * as moment from 'moment';

import axios from '../../../Axios';


class Nichos extends Component {

    state = {
        nichos: [],
        error: false
    }


   

    render() {


        return (
            <div>
                <h3>Nichos</h3>
                <p>Lista de todos los pagos por nichos realizados por los usuarios.</p>
            </div>
           
        );
    }
}

export default Nichos;