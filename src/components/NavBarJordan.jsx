import React from 'react';
import jordanLogo from '../../public/jordan.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <Link to={"/jordan"}>
      <a className="navbar-brand">
        <img src={jordanLogo} width="28" height="30" alt="Jordan Logo" />
      </a>
      </Link>
    </nav>
  );
}

export default Navbar;
