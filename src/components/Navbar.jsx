import React, { useState } from 'react';
import { Link } from 'react-router';
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='navbar'>
      <CiMenuBurger 
          className='menu' 
          color='white' 
          onClick={toggleMenu} 
        />
      <div className='menu-container'>
        
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/"><li className='list-items'>yash-rai</li></Link>
          <Link to="/hello"><li className='list-items'>_hello</li></Link>
          <Link to="/about"><li className='list-items'>_about-me</li></Link>
          <Link to="/projects"><li className='list-items'>_projects</li></Link>
        </ul>
      </div>
      <div>
        <Link to='/contacts' className='contact-link'>_contact_me</Link>
      </div>
    </div>
  )
}

export default Navbar;
