import logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  const [job, setJob] = useState([])
  return (
    <div className="App">
      <BrowserRouter>

        <header>
          <h1>Audrey Flanders
          </h1>
        </header>

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
          <p><cite>&copy; 2023 Audrey Flanders</cite></p>
        </footer>
        
        </BrowserRouter>
      </div>
    );
  }

export default App;
