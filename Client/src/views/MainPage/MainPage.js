import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../../components/Dashboard/Dashboard';
import Library from '../../components/Library/Library';
import Sidebar from '../../components/Sidebar/Sidebar'
import Timeline from '../../components/Timeline/Timeline';
import './MainPage.scss'

function MainPage() {
    return (
        <div className="main_page">
            <Sidebar />
            <Switch>
                <Route exact path="/MainPage/Dashboard" component= { Dashboard }/>
                <Route exact path="/MainPage/Library" component={Library}/>
                <Route exact path="/MainPage/Timeline" component={Timeline}/>

            </Switch>
        </div>
    )
}

export default MainPage
