// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Intro from './components/intro/intro.js';
import Skills from './components/skills/skills.js';
import Resume from './components/resume/resume.js'
import Contact from './components/contact/contac.js'
import Footer from './components/footer/footer.js';
import Project from './components/project/project.js';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills></Skills>
      <Project></Project>
      <Resume></Resume>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
