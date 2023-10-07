import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img className="logoImage" src="icons/Cat.png" />
        <h2>CatsCrib</h2>
      </div>
      <div className="profile">
        <img className="profilePhoto" src="icons/UserImage.png" />
      </div>
    </div>
  );
};

export default Header;
