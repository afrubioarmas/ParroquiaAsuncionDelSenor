import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './containers/Home/Home';
import Events from './containers/Events/Events';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
		<React.Fragment>
			<BrowserRouter>
				<React.Fragment>
					<Header />
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/events" exact component={Events} />
						<Route render={() => <h1>Not Found!</h1>} />
					</Switch>
				</React.Fragment>
			</BrowserRouter>
				<Footer />
		</React.Fragment>

    );
  }
}

export default App;
