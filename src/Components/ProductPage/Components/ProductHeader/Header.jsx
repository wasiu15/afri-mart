import React from "react";

const Header = () => {
  return (
    <div className="header-1 prod-header">
      <a href="#" className="logo">
        <i className="fas fa-shopping-basket"></i>Afri mart
      </a>
      <form action="" className="search-box-container">
        <input
          className="search-input"
          type="search"
          id="search-box"
          placeholder="search here..."
        />
        <label
          htmlFor="search-box"
          className="search-btn fas fa-search"
        ></label>
      </form>
    </div>
  );
};

export default Header;
