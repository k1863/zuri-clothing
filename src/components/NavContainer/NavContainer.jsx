import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../zuri-logo.svg";
import "./NavContainerStyles.scss";

const NavContainer = () => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default NavContainer;
