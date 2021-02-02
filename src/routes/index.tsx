import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "views/Login";
import Home from "views/Home";
import Pay from "views/Pay";
import PrivateRoute from "./PrivateRoute";

const RouteManager = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <PrivateRoute exact path="/home" component={Home} />
      <PrivateRoute exact path="/pay" component={Pay} />
      <Route path="*" component={() => <p>PAGE NOT EXIST</p>} />
    </Switch>
  </Router>
);

export default RouteManager;
