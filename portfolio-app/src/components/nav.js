//Navigate from page to page

import React from 'react';
import { Link } from 'react-router-dom';

import { PiFlowerLight, PiFlowerTulipLight } from 'react-icons/pi'; 



function Nav() {
  return (
    <nav className="main">
        <Link to="/">Home</Link>
        
        <Link to="../projects">Projects</Link>
    </nav>
  );
}

export default Nav;