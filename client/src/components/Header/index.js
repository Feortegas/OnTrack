import React from 'react';
import './header.css';

function Header() {
    return(
        <header>
            <div className="header-container">
                <div className="burger-placeholder"></div>
                <div className="element">
                    <h1 className="title">onTrack</h1>
                </div>    
                <div className="element">
                    <button className="signin-button">
                        Sign In
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;