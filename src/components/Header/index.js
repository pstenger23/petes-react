import React from 'react';

function Nav(props) {

    const {
        aboutSelected,
        setAboutSelected,
        portfolioSelected,
        setPortfolioSelected,
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
                    <li className={`nav-item ${aboutSelected ? ('navActive') : ('')}`}>
                        <a href="#about" onClick={() => {
                            setAboutSelected(true);
                            setContactSelected(false);
                            setPortfolioSelected(false);
                            }}>About</a>
                    </li>
                    <li className={`nav-item ${portfolioSelected ? ('navActive') : ('')}`} >
                        <a href="#portfolio" onClick={() => {
                            setPortfolioSelected(true);
                            setAboutSelected(false);
                            setContactSelected(false);
                            }}>Portfolio</a>
                    </li>
                    <li className={`nav-item ${contactSelected ? ('navactive') : ('')}`}>
                        <a href="#contact" onClick={() => {
                            setContactSelected(true);
                            setAboutSelected(false);
                            setPortfolioSelected(false);
                            }}>Contact</a>
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