import React from "react";
import { Route, Switch, } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./views/Login/Login";
import MainPage from "./views/MainPage/MainPage";

const Routes = () => (
    <Switch>
        <Route exact path="/" component= { Login } />
        <Route exact path="/MainPage/*" component= { MainPage } />
    </Switch>
)

export default Routes;