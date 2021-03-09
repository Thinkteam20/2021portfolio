import React from 'react';
import './Navbar.css';

function Navbar() {
    return(
        <>
        <nav className="navbar">
            <div className="navbar-letter">
                <h3>Sangpil's portfolio website</h3>
            </div>
            <div>
                <ul className='menu-bar'>
                    <li className='menu-bar-li'>Home</li>
                    <li className='menu-bar-li'>About</li>
                    <li className='menu-bar-li'>Work</li>
                    <li className='menu-bar-li'>Movies</li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar;