import React from 'react'
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import PriceForm from "../components/PriceForm";
import { TYPE_INCOME, TYPE_OUTCOME } from "../utility";
import withContext from "../WithContext";


export class CreatePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTab: TYPE_OUTCOME,
            selectedCategory: null,
            validationPassed: true,
        }
    }
    componentDidMount() {
        const { id } = this.props.match.params
        this.props.actions.getEditData(id).then(data => {
            const { editItem, categories } = data
            this.setState({
                selectedTab: (id && editItem) ? categories[editItem.cid].type : TYPE_OUTCOME,
                selectedCategory: (id && editItem) ? categories[editItem.cid] : null,
            })
        })
    }

    cancelSubmit = () => {
        this.props.history.push('/')
    }

    submitForm = (data, isEditMode) => {
        if (!this.state.selectedCategory) {
            this.setState({
                validationPassed: false
            })
            return
        }
        if (!isEditMode) {
            // create
            this.props.actions.createItem(data, this.state.selectedCategory.id).then(this.navigateToHome)
        } else {
            // update 
            this.props.actions.updateItem(data, this.state.selectedCategory.id).then(this.navigateToHome)
        }
        this.props.history.push('/')

    }

    render() {
        const { data } = this.props
        const { items, categories } = data
        const { id } = this.props.match.params
        const editItem = (id && items[id]) ? items[id] : {}
        return(
            <div className="create-page py-3 px-3 rounded mt-3" style={{ background: '#fff' }}>

                <PriceForm
                    onFormSubmit={this.submitForm}
                    onCancelSubmit={this.cancelSubmit}
                    item={editItem}
                />

            </div>
        )
    }
}

export default withRouter(withContext(CreatePage));