import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import LeftMenu from '../components/Dashboard/LeftMenu/LeftMenu';
import Home from '../containers/Dashboard/Home/Home';
import Events from '../containers/Dashboard/Events/Events';
import News from '../containers/Dashboard/News/News';
import Services from '../containers/Dashboard/Services/Services';
import Payments from '../containers/Dashboard/Payments/Payments';

class Dashboard extends Component {
  render() {
    return (
        
      <div className="wrapper dashboard">
            
        <BrowserRouter>
          <React.Fragment>
            <LeftMenu/>
            <Switch>
              <Route path="/dashboard" exact component={Home} />
                          <Route path="/dashboard/events" exact component={Events} />
                          <Route path="/dashboard/news" exact component={News} />
                          <Route path="/dashboard/services" exact component={Services} />
                          <Route path="/dashboard/payments" exact component={Payments} />
                          <Route render={() => <h1>Not Found!</h1>} />
            </Switch>
          </React.Fragment>
        </BrowserRouter>
           
      </div>
		

    );
  }
}

export default Dashboard;