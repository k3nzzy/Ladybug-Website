import React, { useState } from 'react'
import './Styles.css';
import ladybug from "../../images/ladybugImg.png";


const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className='navbar'>
      <div className='brand-container'><img src={ladybug} alt="ladybug" height="35" width="45"></img><a className='brand-text' href='/'>Ladybug Development Club</a></div>
      
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