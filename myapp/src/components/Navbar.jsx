
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import './Navbar.css';
import logo from '../Assets/logo3.png';

  const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
  return (
    <nav className="navbarAll">
      <h1 className='logo'>
      <img src={logo} alt='Logo'className='logoImage'></img>
      <h1 className='logotitle-h1'>Misraq Technology</h1>
      </h1>
      <ul className={`navlinks ${isOpen ? 'active' : ''}`}>
        <li>
          <Link to="/"className='Home'>Home</Link>
        </li>
        <li>
          <Link to="/About"className='About'>About</Link>
        </li>
        <li>
          <Link to="/Contact"className='Contact'>Contact</Link>
        </li>
        <li>
          <Link to="/Service"className='Contact'>Service</Link>
        </li>
        <li>
          <Link to="/Work"className='Contact'>Work</Link>

        </li>
        <li>
          <Link to="/Gallery"className='Contact'>Gallery</Link>

        </li>
    
      </ul>
    </nav>
  );
}

export default Navbar;