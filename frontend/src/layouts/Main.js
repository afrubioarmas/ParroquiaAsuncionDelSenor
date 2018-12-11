import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from '../containers/Main/Home/Home';
import News from '../containers/Main/News/News';
import Calendar from '../containers/Main/Calendar/Calendar';
import Donations from '../containers/Main/Donations/Donations';
import Header from '../components/Main/Header/Header';
import Footer from '../components/Main/Footer/Footer';
import Services from '../containers/Main/Services/Services';
import ServiceCheckout from '../containers/Main/ServiceCheckout/ServiceCheckout';

class Main extends Component {
  render() {
    return (
		<div className="main">
			<BrowserRouter>
				<React.Fragment>
					<Header />
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/noticias" exact component={News} />
						<Route path="/calendario" exact component={Calendar} />
						<Route path="/donaciones" exact component={Donations} />
						<Route path="/pagos" exact component={Services} />
						<Route path="/pago-servicio" exact component={ServiceCheckout} />
						<Route render={() => <h1>Not Found!</h1>} />
					</Switch>
				</React.Fragment>
			</BrowserRouter>
			<Footer />
		</div>

    );
  }
}

export default Main;
