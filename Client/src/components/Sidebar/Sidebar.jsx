import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.scss'

function Sidebar() {
    return (
        <div
         className="sidebar">
            <div className="profile_image">
            </div>
            <div className="nav">
                <Link to="/main-page/dashboard">
                    <span>
                        Dashboard
                    </span>
                </Link>
                <Link to="/main-page/library">
                    <span >
                        Library
                    </span>
                </Link>
                <Link to="/main-page/timeline">
                    <span >
                        Timeline
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar
