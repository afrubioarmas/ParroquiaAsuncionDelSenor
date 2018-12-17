import React, { Component } from 'react';
import InputMoment from 'input-moment';
import * as moment from 'moment';

class CreateEvent extends Component {



    state={
        create:{name:'',startDate:moment(),endDate:moment()},
        startDateVisibility:false,
        endDateVisibility:false


    }

    handleSaveStart = () => {
        this.setState({startDateVisibility:!this.state.startDateVisibility});
        this.setState({endDateVisibility:false});
    };


    handleChangeStart = m => {
        //console.log('saved',  this.state.create.startDate.format('YYYY-MM-DD HH:mm:ss'));
        let aux = this.state.create;
        aux.startDate = m;
        this.setState({create:aux});
        console.log(this.state);

    };

    handleSaveEnd = () => {
        this.setState({endDateVisibility:!this.state.endDateVisibility});
        this.setState({startDateVisibility:false});
    };


    handleChangeEnd = m=> {
        //console.log('saved',  this.state.create.endDate.format('YYYY-MM-DD HH:mm:ss'));
        let aux = this.state.create;
        aux.endDate = m;
        this.setState({create:aux});
        console.log(this.state);

    };

    handleChangeName = (name)=>{

        let aux = this.state.create;
        aux.name = name;
        this.setState({create:aux});


    }
    
    render(){
        return(

            <div className="col-lg-6 col-md-6">
                <div className="card">
                    <div className="header">
                        <h4 className="title">Crear Evento</h4>
                    </div>
                    <div className="content">
                        <form>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Nombre</label>
                                        <input type="text" className="form-control border-input" placeholder="Nombre del envento" onChange={(evt) => { this.handleChangeName(evt.target.value) }}/>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Fecha Inicio</label>
                                        <input type="text" className="form-control border-input" placeholder="Fecha inicio"  value={this.state.create.startDate.format('llll')} onClick={this.handleSaveStart} readOnly/>
                                        <InputMoment 
                                            style= {{display: this.state.startDateVisibility ? "block" : "none"}}
                                            moment={this.state.create.startDate}
                                            onChange={this.handleChangeStart}
                                            onSave={this.handleSaveStart}
                                            minStep={15} // default
                                            hourStep={1} // default
                                            prevMonthIcon="ion-ios-arrow-left" // default
                                            nextMonthIcon="ion-ios-arrow-right" // default
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Fecha Fin</label>
                                        <input type="text" className="form-control border-input" placeholder="Fecha fin" value={this.state.create.endDate.format('llll')} onClick={this.handleSaveEnd} readOnly/>
                                        <InputMoment
                                            style= {{display: this.state.endDateVisibility ? "block" : "none"}}
                                            moment={this.state.create.endDate}
                                            onChange={this.handleChangeEnd}
                                            onSave={this.handleSaveEnd}
                                            minStep={15} // default
                                            hourStep={1} // default
                                            prevMonthIcon="ion-ios-arrow-left" // default
                                            nextMonthIcon="ion-ios-arrow-right" // default
                                        />
                                    </div>
                                </div>
                            </div>

                            
                            <div className="text-center">
                                <button type="submit" className="btn btn-info btn-fill btn-wd" onClick={this.props.handleCreate(this.state.create)}>Crear</button>
                            </div>
                            <div className="clearfix"></div>
                        </form>
                    </div>
                </div>
                
            </div>
    
        
        );
    }

}

export default CreateEvent;


