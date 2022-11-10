import React from "react";
import "./Burger.css";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import LoginButton from "../LoginButton";

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
      <LoginButton />
    </Menu>
  );
}
