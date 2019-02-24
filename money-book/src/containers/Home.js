import React, { Component, Fragment} from "react";
import logo from "../logo.svg";
import PriceList from "../components/PriceList";
import ViewTab from "../components/ViewTab";
import MonthPicker from "../components/MonthPicker";
import CreateBtn from "../components/CreateBtn";
import TotalPrice from "../components/TotalPrice";
import { LIST_VIEW, CHART_VIEW, TYPE_INCOME, TYPE_OUTCOME, Colors } from '../utility'

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

class Home extends Component {
    changeDate = (year, month) => {
        console.log(year, month)
        // this.props.actions.selectNewMonth(year, month)
    }

    render(){
        let totalIncome = 0, totalOutcome = 0;
        items.forEach(item => {
            if(item.category.type === TYPE_OUTCOME){
                totalOutcome += item.price
            }else{
                totalIncome += item.price
            }
        })
        return (
			<Fragment>
				<header className="App-header">
					<div className="row mb-5">
						<img
							src={logo}
							className="App-logo"
							alt="logo"
						/>
					</div>
					<div className="row">
						<div className="col">
							<MonthPicker
								year={2019}
								month={3}
								onChange={this.changeDate}
							/>
						</div>
						<div className="col">
							<TotalPrice
								income={totalIncome}
								outcome={totalOutcome}
							/>
						</div>
					</div>
				</header>
				<div className="content-area py-3 px-3">
					<ViewTab
						activeTab={LIST_VIEW}
						onTabChange={view => {
							console.log(view);
						}}
					/>
					<CreateBtn onClick={()=>{}}/>
					<PriceList
                        items={items}
                        onModifyItem={(item) => {alert(item.id)}}
                        onDeleteItem={(item) => { alert(item.id) }}
                    />
				</div>
			</Fragment>
		);
    }
}

export default Home;