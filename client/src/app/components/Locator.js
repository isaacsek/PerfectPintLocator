import React, { Component } from "react";
import { connect } from "react-redux";
import Map from "./Map";

class Locator extends Component {

    render() {
        return (
            <div style={{textAlign:'center'}}>
                <h1 style={{fontFamily: 'segoe ui'}}>Find My Perfect Pint</h1>
                <div>Find nearby top-rated happy hours!</div>
                <input type="text" style={{width:200}} />
                <Map/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        // look at combined reducers, we called this piece of state - auth
        auth : state.auth
    };
}

export default connect(mapStateToProps)(Locator);
