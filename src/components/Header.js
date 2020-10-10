import React, { Component } from "react";
import NavBar from "./Navbar";
import "../styles/css/main-style.css";
import { CCustomer } from "../services/Context";

class Header extends Component {
  render() {
    return (
      <CCustomer>
        {(value) => {
          const { logoPath, subTitle, widePath } = value.contentBone;
          return (
            <section
              id="sc-header"
              className="container-fluid wideImg"
              style={{ backgroundImage: `url(${widePath})` }}
            >
              <NavBar logo={logoPath} />
              <h2 id="subtitle">{subTitle}</h2>
            </section>
          );
        }}
      </CCustomer>
    );
  }
}

export default Header;
