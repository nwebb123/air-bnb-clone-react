import React from "react";
import logo from "../srcimgs/airbnb_1.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="nav-container">
        <img className="navbar-logo" src={logo} alt="Airbnb logo" /> 
    </nav>
  );
}

export default Navbar;
