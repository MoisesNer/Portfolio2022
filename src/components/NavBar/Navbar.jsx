import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { menuData } from "../../data/MenuData";
import logo from "../../images/navbarlogo.png";

function Navbar() {
  const [scrollNavBar, setScrollNavbar] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 300) {
      setScrollNavbar(true);
    } else {
      setScrollNavbar(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <div className={scrollNavBar ? "navbar active" : "navbar"}>
      <Link to="/">
        <img className="navbar-logo" src={logo} alt="moises nervis logo" />
      </Link>
      <div className="nav-menu">
        {menuData.map((item, index) => (
          <Link className="navbar-link" to={item.link} key={index}>
            {item.title}
          </Link>
        ))}

        {/* BUTTON GD PORTFOLIO */}
        <a
          className="btn-nav color-8"
          href="https://nervisq.wixsite.com/nervis"
          rel="noreferrer"
          target="_blank"
        >
          GD Portfolio
        </a>
      </div>
    </div>
  );
}

export default Navbar;
