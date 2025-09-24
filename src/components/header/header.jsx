import React from "react";
import "./header.css";

const Header = () => (
  <header>
    <div className="container nav-bar">
      <div className="logo">Mrs. College Guide</div>
      <nav>
        <ul>
          <li><a href="#">Universities</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Community</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </nav>
      <div className="nav-actions">
        <a href="#" className="login">LOGIN</a>
        <a href="#" className="btn yellow">SIGN UP</a>
      </div>
    </div>
  </header>
);

export default Header;