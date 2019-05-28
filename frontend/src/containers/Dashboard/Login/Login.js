import React, { Component } from 'react';

class Login extends Component {

    constructor(props){
        super(props);

        this.state={error:false,auth:{username:"",password:""}};
    }

    componentWillReceiveProps(nextProps){
        this.setState({error:nextProps.error,auth:{username:"",password:""}});
    }

    inputChangeHandlerUsername = (event) => {

        let authAux={username: event.target.value,password:this.state.auth.password};
        this.setState({auth:authAux});
    }

    inputChangeHandlerPassword = (event) => {
        let authAux={username:this.state.auth.username ,password:event.target.value};
        this.setState({auth:authAux});
    }

    
    

    render() {
        return (
            <div className="login-parent">
                <div className="col-lg-6 col-md-6 login">
                    <div className="card">
                        <div className="header">
                            <h4 className="title">Inicie sesion para poder usar el panel administrativo.</h4>
                        </div>
                        <div className="content">
                            <form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Usuario o email</label>
                                            <input type="text" className="form-control border-input" placeholder="Ingrese Usuario o email" value={this.state.auth.username} onChange={this.inputChangeHandlerUsername} />
                                            
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Contrasena</label>
                                            <input type="password" className="form-control border-input" placeholder="Ingrese Contrasena" value={this.state.auth.password} onChange={this.inputChangeHandlerPassword}/>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="row error">{this.state.error===false ? "" : "Error en clave o usuario."}</div>

                                
                                <div className="text-center">
                                    <button type="submit" className="btn btn-info btn-fill btn-wd" onClick={this.props.handleLogIn(this.state.auth)}>Iniciar sesion</button>
                                </div>
                                <div className="clearfix"></div>
                            </form>
                        </div>
                    </div>
                    
                </div>
            </div>
           
        );
    }
}

export default Login;