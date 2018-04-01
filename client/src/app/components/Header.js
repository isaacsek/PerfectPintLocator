import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {

    renderContent() {
        switch(this.props.auth) {
            case null:
                return;
            case false:
                return <li><a className="waves-effect waves-light btn green" href="/auth/google">Login With Google</a></li>
            default:
            return [
                <li key="3"><a href="/api/logout">Logout</a></li>
            ];
        }
    }

    render() {
        //console.log(this.props);
        return (
            <nav>
                <div className="nav-wrapper blue">
                    <Link to={this.props.auth ? "/surveys" : "/"}
                        className="brand-logo"
                        style={{marginLeft: '10px'}}
                    >
                        PerfectPint
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
