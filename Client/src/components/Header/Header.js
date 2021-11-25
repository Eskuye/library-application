import React from 'react'
import "./Header.scss";

function Header() {
    return (
        <div className="header">
           <img src="" alt="" />
            <div className="search-bar">
                <div>
                    <input type="text" placeholder="Search..."></input>
                </div>
                <div>
                    <p>Filter</p>
                </div>
                <div>
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Header;
