import React, { useState, useEffect } from "react";
import "./dropdown.css";
import { menuData } from "../../data/MenuData";
import { Link } from "react-router-dom";

const Dropdown = () => {
  //burguer menu
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <div className="drop-burguer-menu" onClick={handleClick}>
        <i
          className={
            click ? "fas fa-times-circle close-icon" : "fas fa-database burguer"
          }
        />
      </div>
      <div className={click ? "dropdown" : "dropdown-closed"}>
        <div className="dropdwon-wrapper">
          <div className="dropdown-menu">
            {menuData.map((item, index) => (
              <Link
                to={item.link}
                key={index}
                className="dropdown-link"
                onClick={closeMobileMenu}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="dropdown-btn-wrap">
            <a
              className="btn-hover color-8"
              href="https://nervisq.wixsite.com/nervis"
              rel="noreferrer"
              target="_blank"
            >
              GD Portfolio
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
