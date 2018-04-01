import React, { Component } from "react";
import { connect } from "react-redux";

class Locator extends Component {

    render() {
        return (
            <div style={{textAlign:'center'}}>
                <h1 style={{fontFamily: 'segoe ui'}}>
                    Find My Perfect Pint
                </h1>
                Find nearby top-rated happy hours!
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
