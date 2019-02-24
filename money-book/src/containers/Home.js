import React, { Component, Fragment} from "react";
import logo from "../logo.svg";
import PriceList from "../components/PriceList";

class Home extends Component {
    render(){
        return(
            <Fragment>
                <header className="App-header">
                    <div className="row mb-5">
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                    <div className="row">
                        <div className="col">
                            1
                        </div>
                        <div className="col">
                            2
                        </div>
                    </div>
                </header>
            </Fragment>
        )
    }
}

export default Home;