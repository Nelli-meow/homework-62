import * as React from 'react';

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-danger-subtle">
        <div className="container">
          <a className="navbar-brand" href="#">Нелли</a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contacts</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;