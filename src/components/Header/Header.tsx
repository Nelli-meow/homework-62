import * as React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-danger-subtle">
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <NavLink className="text-black p-2 fs-4 text-decoration-none" to="/">Nelli-meow</NavLink>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="text-black p-2 text-decoration-none" to="/home">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="text-black p-2 text-decoration-none" to="/about">About us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="text-black p-2 text-decoration-none" to="/contact">Contacts</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;