import React, { Component } from "react";
import NavBar from "./Navbar";
import "../styles/css/my-style.css";

class Header extends Component {
  data = {
    subTitle: "CME Task",
    logoPath: "imgs/star.png",
    widePath: "imgs/background-gold-blue.jpg",
  };

  render() {
    return (
      <section
        id="sc-header"
        className="container-fluid wideImg"
        style={{ backgroundImage: `url(${this.data.widePath})` }}
      >
        <NavBar logo={this.data.logoPath} />
        <h2 id="subtitle">{this.data.subTitle}</h2>
      </section>
    );
  }
}

export default Header;
