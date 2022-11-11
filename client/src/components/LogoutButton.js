import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./LoginButton.css";

const LogoutButton = () => {
  const { user, logout } = useAuth0();

  if (!user) {
    return (
      <span className="header-list-item" onClick={() => logout({ returnTo: window.location.origin })}>
        Member Logout
      </span>
    );
  } else {
    return (
      <a className="menu-item memberLogin" href="/">
        <li className="header-list-item">Member Logout</li>
      </a>
    );
  }
};

export default LogoutButton;

// <button onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>;
