import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <nav class="navbar navbar-expand-md navbar-light bg-transparent">
      <a class="navbar-brand" href="#sc-header">
        <img src={props.logo} alt="logo" className="App-logo" />
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse text-leon"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav ml-auto">
          <li class="nav-item text-capitalize mb-0">
            <Link to="/home" class="nav-link">
              home
            </Link>
          </li>
          <li class="nav-item text-capitalize mb-0">
            <Link to="/counter" class="nav-link">
              counter
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
