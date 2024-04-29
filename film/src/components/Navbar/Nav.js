import React from 'react';
import './Nav.css'
const Nav = () => {
  return (
    <div className='nav'>
      <div className='logo-nav'>
      kingdom <span>Of</span> Heaven
      </div>
      <ul className='nav-menu'>
      <li>Home</li>
      <li>Gallery</li>
      <li>Video</li>
      <li className='nav-avis'>Avis</li>
      </ul>
    </div>
  );
}

export default Nav;
