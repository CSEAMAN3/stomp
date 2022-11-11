import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Burger from "../Burger/Burger";
import logo from "../../images/stomplogo.svg";
import LoginButton from "../LoginButton";
import LogoutButton from "../LogoutButton";

export default function Header() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <Link to="/">
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
            {!user && <LoginButton />}
            {user && <LogoutButton />}
          </ul>
        </nav>
      </div>
    </header>
  );
}
