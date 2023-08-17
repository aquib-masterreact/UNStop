import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "../styles.css"; // You can create a CSS file for styling
import Sidebar from "./Sidebar";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Assessment</div>
      <div className="seperator"></div>
      <div className="navhead active">My Assessment</div>
    </nav>
  );
}

export default Navbar;
