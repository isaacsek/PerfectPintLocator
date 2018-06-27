import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {

    renderContent() {
        switch(this.props.auth) {
            case null:
                return;
            case false:
                return <li><a className="waves-effect waves-light btn green" href="/api/auth/google">Login With Google</a></li>
            default:
            return [
                <li key="1"><a href="/dashboard" className="waves-effect waves-light btn green">Dashboard</a></li>,
                <li key="2"><a href="/api/logout" className="waves-effect waves-light btn green">Logout</a></li>
            ];
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper blue darken-2">
                    <Link to={this.props.auth ? "/" : "/"}
                        className="brand-logo"
                        style={{marginLeft: '10px'}}
                    >
                        Nordy Checkout
                    </Link>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        // look at combined reducers, we called this piece of state - auth
        auth : state.auth
    };
}

export default connect(mapStateToProps)(Header);
