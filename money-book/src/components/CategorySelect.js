import React, { Component} from "react";
import Ionicon from "react-ionicons";
import PropTypes from "prop-types";


class CategorySelect extends Component {
    constructor(props){
        super(props)
        this.state = {
            selectedCategoryId: props.selectedCategory && props.selectedCategory.id
        }
    }
    selecteCategory = (event, category) => {
        this.setState({
            selectedCategoryId: category.id
        })
        this.props.onSelectCategory(category)
        event.preventDefault();
    }

    render() {
        const { categories, selectedCategory } = this.props
        const { selectedCategoryId } = this.state

        return(
            <div className="category-select-component">
                <div className="row">
                    {
                        categories.map((category, index) => {
                            const activeClassName = (selectedCategory && selectedCategoryId === category.id)
                            ? 'category-item col-3 active' : 'category-item col-3'
                            return (
                                <div className={activeClassName} key={index}
                                    onClick={(event) => {this.selecteCategory(event, category)}}
                                >
                                    <Ionicon
                                        className="rounded-circle"
                                        fontSize="50px"
                                        color="#555"
                                        icon={category.iconName}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default CategorySelect;