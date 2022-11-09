import React from "react";
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
      <Link to="/memberprofile">
        <li className="header-list-item">Members Login</li>
      </Link>
    );
  }
};

export default LoginButton;
