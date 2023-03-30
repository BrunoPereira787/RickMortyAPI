import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container-fluid">
        <Link className="fs-3 navbar-brand" to="/">
          Rick and Morty API
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink activeclassname="active" className="nav-link " to="/">
                Character
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeclassname="active"
                className="nav-link"
                to="/episodes"
              >
                Episodes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeclassname="active"
                className="nav-link"
                to="/location"
              >
                Location
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
