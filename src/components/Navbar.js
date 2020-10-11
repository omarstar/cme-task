import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-transparent">
      <a className="navbar-brand" href="#sc-header">
        <img src={props.logo} alt="logo" className="App-logo" />
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse text-leon"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav ml-auto">
          <li className="nav-item text-capitalize mb-0">
            <Link to="/home" className="nav-link">
              home
            </Link>
          </li>
          <li className="nav-item text-capitalize mb-0">
            <Link to="/counter" className="nav-link">
              counter
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
