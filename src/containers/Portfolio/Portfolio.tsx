import * as React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Portfolio = () => {
  return (
    <div className="container">
      <h1 className="text-center m-5">Some of my works</h1>
      <div className="d-flex justify-content-sm-between align-items-center">
        <NavLink to="/portfolio/App1" className="btn btn-outline-danger">container app № 1</NavLink>
        <NavLink to="/portfolio/App2" className="btn btn-outline-warning">container app № 2</NavLink>
        <NavLink to="/portfolio/App3" className="btn btn-outline-success">container app № 3</NavLink>
      </div>
      <Outlet/>
    </div>
  );
};

export default Portfolio;