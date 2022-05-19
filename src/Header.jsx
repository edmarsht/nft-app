import React from "react";
import "./Header.css";
import punk_logo from "./assets/punk_logo.png";
import search_icon from "./assets/search_icon.png";
import action from "./assets/action.png";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={punk_logo} alt="" />
      </div>

      <div className="header__search">
        <div className="header__search-icon">
          <img src={search_icon} alt="" />
        </div>
        <input
          className="header__search-input"
          placeholder="Search Collection, User or Item..."
        />
      </div>

      <div className="header__items">
        <h3>Drops</h3>
        <h3>MarketPlace</h3>
        <h3>Create</h3>
      </div>

      <div className="header__action">
        <img src={action} alt="" />
      </div>

      <div className="header__button">GET IN</div>
    </div>
  );
}

export default Header;
