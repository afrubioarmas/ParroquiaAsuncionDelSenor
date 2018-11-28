import React, { Component } from 'react';

import Carroussel from '../../../components/Main/Carroussel/Carroussel';
import News from './News';
import Calendar from './Calendar';
import Map from '../../../components/Main/Map/Map';

class Home extends Component {
    render() {
        return (
            
            <div className="site-content">   
                <Carroussel />
                <main className="main-content">
                    <News />
                    <div className="fullwidth-block">
                        <div className="container">
                            <div className="row">
                                <Calendar />
                                <Map
                                    isMarkerShown
                                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                                    loadingElement={<div style={{ height: `100%` }} />}
                                    containerElement={<div style={{ height: `400px` }} />}
                                    mapElement={<div style={{ height: `100%` }} />}
                                />
                            </div>
                        </div> 
                    </div> 
                </main> 
            </div>
        );
    }
}

export default Home;