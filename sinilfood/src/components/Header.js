import React, { useState } from "react";
import logo from "../assets/img/sinil_logo.png";
import navWhite from "../assets/img/nav_white.png";
import "../assets/styles/header.css";

const Header = ({ isOpen }) => {
  const [active, setActive] = useState(1);
  const menus = [
    { id: 1, name: "회사소개", url: "#none" },
    { id: 2, name: "사업소개", url: "#none" },
    { id: 3, name: "제품소개", url: "#none" },
    { id: 4, name: "고객서비스", url: "#none" },
  ];

  const onClickMenu = (id) => {
    setActive(id);
  };

  return (
    <header>
      <div className="header-contents">
        <h1>
          <a href="/">
            <img src={logo} alt="Sinilfood Logo" />
          </a>
        </h1>
        <nav className="nav-pc">
          {menus.map((menu) => (
            <h2 key={menu.id} onClick={() => onClickMenu(menu.id)}>
              <a
                href={menu.url}
                className={`${menu.id === active && "active"}`}
              >
                {menu.name}
              </a>
            </h2>
          ))}
        </nav>
        <img src={navWhite} alt="nav" className="nav-mo" onClick={isOpen} />
      </div>
    </header>
  );
};

export default Header;
