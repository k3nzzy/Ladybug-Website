import React, { useState } from 'react'
import './Styles.css';
import ladybug from "../../images/ladybugImg.png";
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  }

  const navLinkActiveStyle = {
    color: "#d51c1c",
    borderColor: "#d51c1c"
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
        <NavLink to='/' style={({ isActive }) => isActive ? navLinkActiveStyle : undefined}>Home</NavLink>
        <NavLink to='/Leadership' style={({ isActive }) => isActive ? navLinkActiveStyle : undefined}>Leadership</NavLink>
        <NavLink to='/Projects' style={({ isActive }) => isActive ? navLinkActiveStyle : undefined}>Projects</NavLink>
        <NavLink to='/Contacts' style={({ isActive }) => isActive ? navLinkActiveStyle : undefined}>Contacts</NavLink>
      </div>
      
    </div>
  )
}

export default Navbar;