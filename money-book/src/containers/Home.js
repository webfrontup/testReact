import React, { Component, Fragment} from "react";
import logo from "../logo.svg";
import PriceList from "../components/PriceList";
import ViewTab from "../components/ViewTab";
import MonthPicker from "../components/MonthPicker";
import CreateBtn from "../components/CreateBtn";
import TotalPrice from "../components/TotalPrice";
import { LIST_VIEW, CHART_VIEW, TYPE_INCOME, TYPE_OUTCOME, Colors, parseToYearAndMonth } from '../utility'

const items = [
	{
		id: 1,
		title: "aabbtravel",
		price: 200,
        date: "2018-09-10",
        "cid": 1,
	},
	{
		id: 2,
		title: "aabbtravel2",
		price: 2020,
        date: "2018-09-10",
        "cid": 2,
	},
	{
		id: 3,
		title: "aabbtravel3",
		price: 220,
        date: "2018-09-10",
        "cid": 3,
	}
];

const categorys = {
	"1": {
		id: "1",
		name: "旅行",
		type: "outcome",
		iconName: "ios-plane"
	},
	"2": {
		id: "2",
		name: "理财",
		type: "income",
		iconName: "logo-yen"
	},
	"3": {
		id: "3",
		name: "travel",
		type: "income",
		iconName: "ios-plane"
	}
};

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
			items,
            currentDate: parseToYearAndMonth(),
            tabView: LIST_VIEW,

		};
    }
    changeDate = (year, month) => {
        console.log(year, month)
        // this.props.actions.selectNewMonth(year, month)
    }

    render(){
        const { items, currentDate, tabView} = this.state;
        const itemsWithCategory = items.map(item => {
            item.category = categorys[item.cid]
            return item
        })
        let totalIncome = 0, totalOutcome = 0;
        itemsWithCategory.forEach(item => {
			if (item.category.type === TYPE_OUTCOME) {
				totalOutcome += item.price;
			} else {
				totalIncome += item.price;
			}
		});
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
                                year={currentDate.year}
                                month={currentDate.month}
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
                        activeTab={tabView}
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