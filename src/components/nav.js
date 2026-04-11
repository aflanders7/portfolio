import React from 'react';
import { Link, useLocation } from 'react-router-dom';
 
function Nav() {
  const location = useLocation();
 
  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="nav-logo">
          Audrey Flanders
        </div>
        <div className="nav-links">
          <Link to="/" className={`nav-btn ${location.pathname === '/' ? 'active' : ''}`}>
            About
          </Link>
          <Link to="/projects" className={`nav-btn ${location.pathname === '/projects' ? 'active' : ''}`}>
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
}
 
export default Nav;
 