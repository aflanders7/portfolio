import './App.css';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './components/nav';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';

import { BsLinkedin, BsGithub } from 'react-icons/bs'; 

function App() {

  return (
    <div className="App">
      <BrowserRouter>

        <Nav />

        <main>
          <section>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<ProjectsPage />} />

            </Routes>
          </section>
        </main>
        
        <footer>
        <p><cite>&copy; 2024 Audrey Flanders</cite></p>
        <div class="socials">
          <a href="https://github.com/aflanders7" target="_blank"><BsGithub size={35}/></a>
          <a href="https://www.linkedin.com/in/audrey-flanders-6767081b5/" target="_blank"><BsLinkedin size={35}/></a>
        </div>
        </footer>
        
        </BrowserRouter>
      </div>
    );
  }

export default App;
