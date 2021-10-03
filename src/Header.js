import React from 'react'
import "./Header.css";

function Header() {
    return (
        <div className="header">
            <div className="unilag_logo_container"></div>
            <div className="search_bar_container">
                <input className="search_bar"></input>
            </div>
            <div className="user_container">
            </div>
        </div>
    )
}

export default Header;
