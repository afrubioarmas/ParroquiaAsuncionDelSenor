import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Dashboard from './layouts/Dashboard';
import Main from './layouts/Main';

class App extends Component {
  render() {
    return (
		<React.Fragment>
			<BrowserRouter>
				<React.Fragment>
					<Switch>
						<Route path="/dashboard" component={Dashboard} />
						<Route render={() => <Main/>} />
					</Switch>
				</React.Fragment>
			</BrowserRouter>
		</React.Fragment>

    );
  }
}

export default App;
