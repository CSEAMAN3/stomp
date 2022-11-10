import React from "react";
import "./LoginButton.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const LoginButton = () => {
  const { user, loginWithRedirect } = useAuth0();
  if (!user) {
    return (
      <span className="header-list-item" onClick={() => loginWithRedirect()}>
        Members Login
      </span>
    );
  } else {
    return (
      <a className="menu-item memberLogin" href="/memberprofile">
        <li className="header-list-item">Members Login</li>
      </a>
    );
  }
};

export default LoginButton;
