import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
            Super Mario Memory Game
        </a>
        <div className="navbar pl-0 pr-0">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item mr-2">
                    <a className="nav-link" href="/">Game</a>
                </li>
                <li className="nav-item ml-2 mr-2">
                    <a className="nav-link" href="/">About</a>
                </li>
                <li className="nav-item ml-2">
                    <a className="nav-link" href="/">Legal</a>
                </li>
            </ul>
        </div>
    </nav>
  );
}

export default Nav;