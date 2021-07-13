import React from 'react';

function Nav() {
    return(
        <header>
            <h1>
                <a href='/'>Peter Stenger</a>
            </h1>
            <nav>
                <ul className="flex">
                    <li className="nav-item">
                        <a href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a href="#resume">Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;