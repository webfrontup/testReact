import React, { Component,Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";
import Home from "./containers/Home";
import PriceList from "./components/PriceList";
import ViewTab from "./components/ViewTab";
import MonthPicker from "./components/MonthPicker"
import { LIST_VIEW } from "./utility";

const items = [
	{
		id: 1,
		title: "aabbtravel",
		price: 200,
		date: "2018-09-10",
		category: {
			id: 1,
			name: "travel",
			type: "outcome",
			iconName: "ios-plane"
		}
	},
	{
		id: 2,
		title: "aabbtravel",
		price: 2020,
		date: "2018-09-10",
		category: {
			id: 1,
			name: "travel",
			type: "outcome",
			iconName: "ios-plane"
		}
	}
];


class App extends Component {
    changeDate = (year, month) => {
        console.log(year,month)
        // this.props.actions.selectNewMonth(year, month)
    }
  render() {
    return (
		<div className="App">
			{/* <Home/> */}
			{/* <PriceList
				items={items}
                onModifyItem={(item) => {alert(item.id)}}
                onDeleteItem={(item) => { alert(item.id) }}
            /> */}
            {/* <ViewTab
                activeTab={LIST_VIEW}
                onTabChange={(view)=>{console.log(view)}}
            /> */}
            <MonthPicker
                year={2019}
                month={3}
                onChange={this.changeDate}
            />
		</div>
	);
  }
}

export default App;
