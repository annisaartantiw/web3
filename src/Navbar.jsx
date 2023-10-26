// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <button to="/">Home</button>
        </li>
        <li>
          <button to="/aboutus">About Us</button>
        </li>
        <li>
          <button to="/contact">Contact</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
