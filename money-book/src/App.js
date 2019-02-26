import React, { Component,Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";
import Home from "./containers/Home";
import Create from "./containers/Create";

class App extends Component {
    
  render() {
    return (
		<Router>
			<div className="App">
				<div className="container pb-5">
					<Route path="/" exact component={Home} />
					<Route path="/create" component={Create} />
					<Route path="/edit/:id" component={Create} />
				</div>
			</div>
		</Router>
	);
  }
}

export default App;
