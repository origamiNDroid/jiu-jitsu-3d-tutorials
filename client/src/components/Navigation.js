import React from 'react'
import { Link } from 'react-router-dom';

function Navigation() {
  return 
  <nav className='navbar'>
      <h4><Link to="/">Home</Link></h4>
      <h4><Link to="/">Techniques</Link></h4>
      <h4><Link to="/">Profile</Link></h4>
  </nav>
}

export default Navigation;