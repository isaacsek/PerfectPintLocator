import React, { Component } from "react";
import { connect } from "react-redux";

class Landing extends Component {

    render() {
        return (
            <div style={{textAlign:'center'}}>
                <h1 style={{fontFamily: 'segoe ui'}}>
                    Nordy Checkout
                </h1>
                Checkout in half the time!
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

export default connect(mapStateToProps)(Landing);
