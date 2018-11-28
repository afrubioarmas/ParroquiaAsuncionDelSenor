import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import LeftMenu from '../components/Dashboard/LeftMenu/LeftMenu';
import TopNav from '../components/Dashboard/TopNav/TopNav';
import Home from '../containers/Dashboard/Home/Home';

class Dashboard extends Component {
  render() {
    return (
        
        <div className="container body">
            <div className="main_container">
			<BrowserRouter>
				<React.Fragment>
                    <LeftMenu/>
                    <TopNav/>
					<Switch>
						<Route path="/dashboard" exact component={Home} />
						<Route render={() => <h1>Not Found!</h1>} />
					</Switch>
				</React.Fragment>
			</BrowserRouter>
            </div>
        </div>
		

    );
  }
}

export default Dashboard;