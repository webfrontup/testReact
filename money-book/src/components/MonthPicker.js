import React, { Component } from "react";
import PropTypes from "prop-types";
import { padLeft, range } from "../utility";

class MonthPicker extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			selectedYear: this.props.year
		};
    }
    componentDidMount() {
        document.addEventListener('click', this.handleClick, false)
    }
    componentWillUnmount() {
        document.removeEventListener('click', this.handleClick, false)
    }
    handleClick = (event) => {
        // 如果绑定dom包含了event.target，那么返回
        // 即是否点击，点击即包含event对象
        if (this.node.contains(event.target)) {
            return;
        }
        this.setState({
            isOpen: false,
        })
    }
    toggleDropdown = (event) => {
        event.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    selectYear = (event, yearNumber) => {
        event.preventDefault()
        this.setState({
            selectedYear: yearNumber
        })
    }
    selectMonth = (event, monthNumber) => {
        event.preventDefault()
        this.setState({
            isOpen: false
        })
        this.props.onChange(this.state.selectedYear, monthNumber)
    }

	render() {
        const { year, month } = this.props;
        const { isOpen } = this.state;
        const { selectedYear } = this.state;
        const monthRange = range(12, 1);
        const yearRange = range(9, -4).map(number => number + year)
		return (
            <div className="dropdown month-picker-component" ref={(ref) => { this.node = ref }}>
				<h4>选择月份</h4>
				<button
					className="btn btn-lg btn-secondary dropdown-toggle"
					onClick={this.toggleDropdown}
				>
					{`${year}年 ${padLeft(month)}月`}
				</button>
				{isOpen && (
					<div
						className="dropdown-menu"
						style={{ display: "block" }}
					>
						<div className="row">
							<div className="col border-right years-range">
								{yearRange.map((yearNumber, index) => (
									<a
										key={index}
										role="button"
										onClick={event => {
											this.selectYear(
												event,
												yearNumber
											);
										}}
										className={
											yearNumber === selectedYear
												? "dropdown-item active text-white"
												: "dropdown-item"
										}
									>
										{yearNumber} 年
									</a>
								))}
							</div>
							<div className="col months-range">
								{monthRange.map(
									(monthNumber, index) => (
										<a
											key={index}
											role="button"
											onClick={event => {
												this.selectMonth(
													event,
													monthNumber
												);
											}}
											className={
												monthNumber === month
													? "dropdown-item active text-white"
													: "dropdown-item"
											}
										>
											{padLeft(monthNumber)} 月
										</a>
									)
								)}
							</div>
						</div>
					</div>
				)}
			</div>
		);
	}
}


export default MonthPicker;