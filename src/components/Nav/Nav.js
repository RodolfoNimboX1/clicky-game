import React from "react";

const Nav = props => (
<nav className="navbar navbar-expand-lg" id="nav">
  <a className="navbar-brand" href="/">Rick and Morty Clicky Game!</a>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
        <a className="nav-link">Click an image to begin</a>
        <a className="nav-link">Score: {props.children} | Top Score: {props.children}</a>
    </ul>
  </div>
</nav>
);

export default Nav;