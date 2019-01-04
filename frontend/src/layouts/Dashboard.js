import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import LeftMenu from '../components/Dashboard/LeftMenu/LeftMenu';
import Events from '../containers/Dashboard/Events/Events';
import News from '../containers/Dashboard/News/News';
import Services from '../containers/Dashboard/Services/Services';
import Payments from '../containers/Dashboard/Payments/Payments';
import Login from '../containers/Dashboard/Login/Login';

class Dashboard extends Component {

  state = {authenticated:false,error:false};
  

  handleLogIn=(auth)=>(e)=>{
    e.preventDefault();
    if(auth.username==="usuario" && auth.password==="clave"){
        this.setState({authenticated:true,error:false});
    }else{
        this.setState({authenticated:false,error:true});
    }
  }

  handleLogOut=(e) =>{
    e.preventDefault();
        this.setState({authenticated:false,error:false});
  }

  render() {
    let switchAux;

    if(this.state.authenticated){
      switchAux = 
                  <React.Fragment>
                    <LeftMenu handleLogOut={this.handleLogOut}/>
                    <Switch>
                      <Route path="/dashboard" exact component={Events} />
                      <Route path="/dashboard/events" exact component={Events} />
                      <Route path="/dashboard/news" exact component={News} />
                      <Route path="/dashboard/services" exact component={Services} />
                      <Route path="/dashboard/payments" exact component={Payments} />
                      <Route render={() => <h1>Not Found!</h1>} />
                    </Switch>
                  </React.Fragment>  ;
    }else{
      switchAux= <Switch>
                  <Route render = {()=><Login handleLogIn={this.handleLogIn} error={this.state.error} />} />
                </Switch>;
    }


    return (
        
      <div className="wrapper dashboard">
            
        <BrowserRouter>
              {switchAux}
        </BrowserRouter>
           
      </div>
		

    );
  }
}

export default Dashboard;