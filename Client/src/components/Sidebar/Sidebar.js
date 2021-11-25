import React from 'react'
import './Sidebar.scss'

function Sidebar() {
    return (
        <div
         className="sidebar">
            <div className="profile_image">
            </div>
            <div className="nav">
                <a href="/MainPage/Dashboard">
                    <span>
                        Dashboard
                    </span>
                </a>
                <a href="/MainPage/Library">
                    <span >
                        Library
                    </span>
                </a>
                <a href="/MainPage/Timeline">
                    <span >
                        Timeline
                    </span>
                </a>
            </div>
        </div>
    )
}

export default Sidebar
