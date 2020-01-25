import React from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import FormPage from "./views/FormPage";
import Registeruser from "./views/Register";
import AdminLayout from "./layouts/Admin";
import { loadUser } from "js/actions/auth";

// const dispatch = useDispatch();

export default class Register extends React.Component {
  // state = {
  //   toDashboard: false,
  //   loading: true
  // };

  // componentDidMount() {
  //   if (localStorage.getItem("token")) {
  //     dispatch(loadUser(localStorage.getItem("token")))
  //       .then(data => this.setState({ toDashboard: true, loading: false }))
  //       .catch(err => this.setState({ toDashboard: false, loading: false }));
  //   } else {
  //     this.setState({ toDashboard: false, loading: false });
  //   }
  // }

  render() {
    // if (this.state.loading) {
    //   return;
    // }
    // if (this.state.toDashboard === true) {
    //   return <Redirect to="/login" />;
    // }

    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={FormPage} />
          {/* <Redirect from="/" to="/login" /> */}
          <Route path="/register" component={Registeruser} />
          <Route path="/admin" render={props => <AdminLayout {...props} />} />
          <Redirect to="/login" />
        </Switch>
      </BrowserRouter>
    );
  }
}
