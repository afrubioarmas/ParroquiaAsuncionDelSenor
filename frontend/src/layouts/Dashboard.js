import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import LeftMenu from '../components/Dashboard/LeftMenu/LeftMenu';
import Home from '../containers/Dashboard/Home/Home';
import Events from '../containers/Dashboard/Events/Events';
import Users from '../containers/Dashboard/Users/Users';
import News from '../containers/Dashboard/News/News';
import Services from '../containers/Dashboard/Services/Services';
import Payments from '../containers/Dashboard/Payments/Payments';
import Content from '../containers/Dashboard/Content/Content';

class Dashboard extends Component {
  render() {
    return (
        
        <div className="wrapper">
            
			<BrowserRouter>
				<React.Fragment>
                    <LeftMenu/>
					<Switch>
						<Route path="/dashboard" exact component={Home} />
                        <Route path="/dashboard/users" exact component={Users} />
                        <Route path="/dashboard/events" exact component={Events} />
                        <Route path="/dashboard/news" exact component={News} />
                        <Route path="/dashboard/services" exact component={Services} />
                        <Route path="/dashboard/payments" exact component={Payments} />
                        <Route path="/dashboard/content" exact component={Content} />
                        <Route render={() => <h1>Not Found!</h1>} />
					</Switch>
				</React.Fragment>
			</BrowserRouter>
           
        </div>
		

    );
  }
}

export default Dashboard;