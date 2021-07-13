import React, {useState} from 'react';


import './App.css';
import About from './components/About'
import Nav from './components/Header'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {

  const [aboutSelected, setAboutSelected] = useState(true);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>
      <Nav
      aboutSelected={aboutSelected}
      setAboutSelected={setAboutSelected}
      portfolioSelected={portfolioSelected}
      setPortfolioSelected={setPortfolioSelected}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}></Nav>
      <main>
      {aboutSelected ? (
        <>
          <About></About>
        </>
      ) : portfolioSelected ? (
        <>
          <Portfolio></Portfolio>
        </>
      ) : (
        <>
          <Contact></Contact>
        </>
      )}
      
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
