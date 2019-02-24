import React, { Component, Fragment} from "react";
import logo from "../logo.svg";
import PriceList from "../components/PriceList";
import ViewTab from "../components/ViewTab";
import MonthPicker from "../components/MonthPicker";
import CreateBtn from "../components/CreateBtn";
import TotalPrice from "../components/TotalPrice";
import { LIST_VIEW, CHART_VIEW, TYPE_INCOME, TYPE_OUTCOME, Colors, parseToYearAndMonth, padLeft } from '../utility'

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

const newItem = {
    "id": 4,
    "title": "新添加的项目",
    "price": 300,
    "date": "2018-10-10",
    "cid": 1
}

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
			items,
            currentDate: parseToYearAndMonth(),
            tabView: LIST_VIEW,

		};
    }
    changeView = (view) => {
        this.setState({
            tabView: view 
        })
    }
    changeDate = (year, month) => {
        this.setState({
            currentDate: {year, month}
        })
    }
    modifyItem = (modifyItem) => {
        const modifyItems = this.state.items.map(item => {
            if(item.id === modifyItem.id) {
                return { ...item, title: '更新后的标题'}
            }else{
                return item
            }
        })
        this.setState({
            items: modifyItems
        })
    }
    createItem = () => {
        this.setState({
            items:[newItem, ...this.state.items]
        })
    }
    deleteItem = (deletedItem) => {
        const filteredItems = this.state.items.filter(item => item.id !== deletedItem.id)
        this.setState({
            items: filteredItems
        })
    }


    render(){
        const { items, currentDate, tabView} = this.state;
        const itemsWithCategory = items.map(item => {
            item.category = categorys[item.cid]
            return item
        }).filter(item => {
            // 必须满足年份和月份
            return item.date.includes(`${currentDate.year}-${padLeft(currentDate.month)}`)
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
                        onTabChange={this.changeView}
					/>
					<CreateBtn onClick={this.createItem}/>
                    { tabView === LIST_VIEW &&
                        <PriceList
                            items={itemsWithCategory}
                            onModifyItem={this.modifyItem}
                            onDeleteItem={this.deleteItem}
                        />
                    }
                    { tabView === CHART_VIEW && 
                        <h1>这里是图表区域</h1>
                    }

				</div>
			</Fragment>
		);
    }
}

export default Home;