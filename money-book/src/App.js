import React, { Component,Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";
import Home from "./containers/Home";

class App extends Component {
    
  render() {
    return (
		<div className="App">
			<Home/>
			
		</div>
	);
  }
}

export default App;
