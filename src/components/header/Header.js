import React from "react";
import { Link } from "react-router-dom";
import "./app.css";

const Header = ({ selectedLink }) => {
  return (
    <div className="header">
      <object
        className="main-logo"
        aria-labelledby="the puts guy logo"
        alt="the puts guy logo"
        data="../logos/theputsguyLogo.svg"
      ></object>
      <div className="header-bttn-holder">
        <Link to="/" className={`header-bttn ${selectedLink === 0 ? "header-bttn-toggled" : ""}`}>
          <div>About Us</div>
        </Link>
        <Link
          to="/blog"
          className={`header-bttn ${selectedLink === 1 ? "header-bttn-toggled" : ""}`}
        >
          <div>Blog</div>
        </Link>
        <Link
          to="/faq"
          className={`header-bttn ${selectedLink === 2 ? "header-bttn-toggled" : ""}`}
        >
          <div>FAQ</div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
