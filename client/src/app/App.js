import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import { connect } from "react-redux";
import * as actions from "../actions";
import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/dashboard" component={Dashboard} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, actions)(App);
