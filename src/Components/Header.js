import React from "react";

const Header = () => {
  return (
    <div className="header-1">
      <a href="#" className="logo">
        <i className="fas fa-shopping-basket"></i>groco
      </a>
      <form action="" className="search-box-container">
        <input
          className="search-input"
          type="search"
          id="search-box"
          placeholder="search here..."
        />
        <label for="search-box" className="search-btn fas fa-search"></label>
      </form>
    </div>
  );
};

export default Header;
