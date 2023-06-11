import React, { useState } from 'react';
import './stylesnav.css';
import nikeLogo from "../../public/nike2.svg";
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const Navbar2 = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <button className="navbar-toggler" type="button" onClick={toggleCollapse}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarTogglerDemo01">
          <Link to={"/"}><img src={nikeLogo} width="50" height="50" alt="Nike Logo" /></Link>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" to={"/Trend"}>Destacado <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/Men"}>Hombre</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/Women"}>Mujer</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/kids"}>Niño/a</Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Buscar" />
            <CartWidget />
          </form>
        </div>
      </nav>
    </>
  );
}

export default Navbar2;