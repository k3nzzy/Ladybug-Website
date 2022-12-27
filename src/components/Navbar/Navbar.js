import React, { useState } from 'react'
import { Bug } from '@icon-park/react';
import './Styles.css';


const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className='navbar'>
      <div className='brand-container'><Bug className='bug-logo' size={"2em"} fill={"#d51c1c"} /><a className='brand-text' href='/'>Ladybug Development Club</a></div>
      <div onClick={toggleCollapse} className='collapseButton'>
        <span />
        <span />
        <span />
      </div>

      <div className={`menu${isCollapsed ? " visible" : ""}` }>
        <a href='/'>Home</a>
        <a href='/'>About</a>
        <a href='/Projects'>Projects</a>
        <a href='/'>FAQ</a>
      </div>
      
    </div>
  )
}

export default Navbar;