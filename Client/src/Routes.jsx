import React from "react";
import { Route, Switch, } from "react-router-dom";
import Login from "./views/login/Login.jsx";
import MainPage from "./views/mainPage/MainPage.jsx";

const Routes = () => (
    <Switch>
        <Route exact path="/" component= { Login } />
        <Route exact path="/main-page/*" component= { MainPage } />
    </Switch>
)

export default Routes;