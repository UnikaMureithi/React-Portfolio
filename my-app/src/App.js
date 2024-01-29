// import logo from './logo.svg';
import React from 'react';
import './App.css';
// import React, { useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Hobbies from './components/Hobbies';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  return (
    <div id="home">
    <Header />
    <br /><br /><br /><br /><br /><br />

    <About />
    <Skills/>
    <Hobbies/>
    <Education/>
    <Projects/>
    <Contact/>
  </div>

  );
}

export default App;
