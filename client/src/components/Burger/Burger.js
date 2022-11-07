import React from "react";
import "./Burger.css";
import { slide as Menu } from "react-burger-menu";

export default function Burger() {
  return (
    <Menu className="my-menu" width={"70vw"} isOpen={false} noOverlay right>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/">
        About
      </a>
      <a className="menu-item" href="/">
        Contact
      </a>
      <a className="menu-item" href="/">
        Members Login
      </a>
    </Menu>
  );
}
