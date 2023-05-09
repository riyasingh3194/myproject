import React from "react";
import './Nav.css'

export default function Nav() {
  return (
    <div>
      <header className="header">
        <div className="nav-head">
          <ul>
            <li>Home</li>
          </ul>
          <ul>
            <li>About</li>
          </ul>
          <ul>
            <li>Projcts</li>
          </ul>
          <ul>
            <li>Videos</li>
          </ul>
          <ul>
            <li>Contact</li>
          </ul>
        </div>
      </header>
    </div>
  );
}
