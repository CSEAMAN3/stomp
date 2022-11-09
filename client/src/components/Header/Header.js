import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

import Burger from "../Burger/Burger";
import logo from "../../images/stomplogo.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <Link to="/">
            {/* <h1 className="header-logo">Stomp</h1> */}
            <img className="logo" src={logo} alt="stomp logo" />
          </Link>
        </div>
        <Burger />
        <nav className="header-nav">
          <ul className="header-nav-list">
            <Link to="/about">
              <li className="header-list-item">About</li>
            </Link>
            <Link to="/contact">
              <li className="header-list-item">Contact</li>
            </Link>
            <Link to="/memberprofile">
              <li className="header-list-item">Members Login</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}
