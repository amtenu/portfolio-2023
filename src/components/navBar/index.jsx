import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaReact, FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { navMenus } from "./config";
import './styles.scss'


const Navbar = () => {
  const [click, setClick] = useState(false);

  const HandleClick = () => {
    setClick(!click);
  };

  return (
    <div className="navbar">
      <div className="navbar__container">
        <Link to={"/"} className="navbar__container__logo">
          <FaReact size={30} />
        </Link>
        <ul className={click ? "navbar__container__menu active":"navbar__container__menu"}>
          {navMenus.map((item, key) => (
            <li key={key} className="navbar__container__menu__item">
              <Link
                to={item.to}
                className="navbar__container__menu_item__links"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-icon" onClick={HandleClick}>
          {click ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
