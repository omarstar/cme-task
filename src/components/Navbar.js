import React from "react";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-danger">
      <a class="navbar-brand" href="#sc-title">
        <img src="imgs/star.png" alt="logo" className="logo-box" />
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
          <li class="nav-item">
            <a class="nav-link" href="#sc-itemsList">
              page 1
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#sc-counter">
              page 2
            </a>
          </li>
        </ul>
        {/* //search// */}
        {/* <form className="fomr-inline">
          <div className="md-form my-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
        </form> */}
      </div>
    </nav>
  );
};

export default NavBar;
