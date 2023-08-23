//Navigate from page to page

import React from 'react';
import { Link } from 'react-router-dom';

import { PiPottedPlantFill } from 'react-icons/pi'; 




function Nav() {
  return (

    <nav className="navigation">
        <div><PiPottedPlantFill size= "40" color='DarkSeaGreen'/></div>
        <div>
        <Link to="../">About</Link>
        <Link to="../projects">Projects</Link>
        </div>
    </nav>
  );
}

export default Nav;