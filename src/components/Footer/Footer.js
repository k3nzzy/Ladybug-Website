import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <p>Ladybug Development Club</p>
      <Link to="/contact-us">Contact Us</Link>
    </footer>
  );
}

export default Footer;