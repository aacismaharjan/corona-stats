import React, { Component } from "react";
import logo from "../images/logo.png";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    active: true,
  };

  constructor(props) {
    super(props);
  }

  toggleClass = () => {
    this.setState({ active: !this.state.active });
  };

  render() {
    return (
      <header className="main-header">
        <div className="container">
          <div className="brand">
            <a href="/">
              <img src={logo} alt="Corona Tracker" />
            </a>
          </div>

          <nav className="main-nav">
            <div
              className={this.state.active ? "items hide" : "items"}
              onClick={() => this.toggleClasses}
            >
              <Link to="/" className="active">
                Home
              </Link>
              <Link to="/">Compare Stats</Link>
              <Link to="/more-info">More Info</Link>
            </div>
            <button className="toggle-nav" onClick={this.toggleClass}>
              <FaBars />
            </button>
          </nav>
        </div>
      </header>
    );
  }
}
