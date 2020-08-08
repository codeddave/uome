import React, { Component } from "react";
import { Link } from "react-router-dom";

class AppNavbar extends Component {
  render() {
    return (
      <nav className="nav navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <a href="/" className="navbar-brand uome">
            UOMe
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarMain"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarMain">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default AppNavbar;
