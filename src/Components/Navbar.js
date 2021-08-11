import React from "react";

const Navbar = () => {
  return (
    <div className="header-2">
      <div id="menu-bar" className="fas fa-bars"></div>

      <nav className="navbar">
        <a href="#home">home</a>
        <a href="#category">category</a>
        <a href="#product">product</a>
        <a href="#deal">deal</a>
        <a href="#contact">contact</a>
      </nav>

      <div className="icons">
        <a href="#" className="fas fa-shopping-cart"></a>
        <a href="#" className="fas fa-heart"></a>
        <a href="#" className="fas fa-user-circle"></a>
      </div>
    </div>
  );
};

export default Navbar;
