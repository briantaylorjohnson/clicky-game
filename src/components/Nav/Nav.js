import React from "react";
import "./Nav.css";

// Creates Nav component for heading and title
function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
            Super Mario Memory Game
        </a>
    </nav>
  );
}

// Exports Nav component
export default Nav;