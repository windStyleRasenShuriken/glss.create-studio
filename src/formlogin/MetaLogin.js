import React, { Component } from "react";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import SignUpForm from "./pages/SignUpForm";
import SignInForm from "./pages/SignInForm";

import "./App.css";

class MetaLogin extends Component {
  render() {
    return (
      // <Router basename="/react-auth-ui/">
        <div className="Appa">
          <div className="appAside" />
          <div className="appForm">
            <div className="pageSwitcher">
              <NavLink
                to="/sign-in"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Sign In
              </NavLink>
              <NavLink
                exact
                to="/"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Sign Up
              </NavLink>
            </div>

            <div className="formTitle">
              <NavLink
                to="/sign-in"
                activeClassName="formTitleLink-active"
                className="formTitleLink"
              >
                Sign In
              </NavLink>{" "}
              or{" "}
              <NavLink
                exact
                to="/"
                activeClassName="formTitleLink-active"
                className="formTitleLink"
              >
                Sign Up
              </NavLink>
            </div>

            {/* <Route exact path="/" component={SignUpForm} /> */}
            {/* <NavLink to={'/signup'}>Sign UP</NavLink> */}
            <SignUpForm/>
            {/* <Route path="/sign-in" component={SignInForm} /> */}
            {/* <NavLink to="/login">Log IN</NavLink> */}
            <SignInForm/>
          </div>
        </div>
      // </Router>
    );
  }
}

export default MetaLogin;
