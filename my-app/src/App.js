// import logo from './logo.svg';
import React from 'react';
import './App.css';
// import React, { useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Hobbies from './components/Hobbies';


function App() {
  return (
    <div id="home">
    <Header />
    <About />
    <Skills/>
    <Hobbies/>
  </div>

  );
}

export default App;
