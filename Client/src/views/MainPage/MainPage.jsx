import React from 'react'
import { Switch, Route } from 'react-router-dom';
import store from '../../context/Store'
import Dashboard from '../../components/dashboard/Dashboard';
import Library from '../../components/library/Library';
import Sidebar from '../../components/sidebar/Sidebar'
import Timeline from '../../components/timeline/Timeline';
import './MainPage.scss'

function MainPage() {

    console.log(store.getState())


    return (
        <div className="main_page">
            <Sidebar />
            <Switch>
                <Route exact path="/main-page/dashboard" component= { Dashboard }/>
                <Route exact path="/main-page/library" component={Library}/>
                <Route exact path="/main-page/timeline" component={Timeline}/>
            </Switch>
        </div>
    )
}

export default MainPage
