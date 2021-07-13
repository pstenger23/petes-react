import React from 'react';

function Nav(props) {

    const {
        aboutSelected,
        setAboutSelected,
        portfolioSelected,
        setPortfolioSeleted,
        contactSelected,
        setContactSelected
    } = props;
    return(
        <header>
            <h1>
                <a href='/'>Peter Stenger</a>
            </h1>
            <nav>
                <ul className="flex">
                    <li className={`nav-item ${aboutSelected && 'navActive'}`}>
                        <span href="#about" onClick={() => {
                            setAboutSelected(true);
                            setContactSelected(false);
                            setPortfolioSeleted(false);
                            }}>About</span>
                    </li>
                    <li className={`nav-item ${portfolioSelected && 'navActive'}`} >
                        <span href="#portfolio" onClick={() => {
                            setPortfolioSeleted(true);
                            setAboutSelected(false);
                            setContactSelected(false);
                            }}>Portfolio</span>
                    </li>
                    <li className={`nav-item ${contactSelected && 'navactive'}`}>
                        <span onCLick={() => {
                            setContactSelected(true);
                            setAboutSelected(false);
                            setContactSelected(false);
                            }}>Contact</span>
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