import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="FooterStyle">
      <h2>
        <img className="homePage" src="/HomePage.svg" alt="my image" onClick={null} />
        <img className="post" src="Post.svg" alt="my image" onClick={null} />
        <img className="favorite" src="Favorite.svg" alt="my image" onClick={null} />
      </h2>
    </div>
  );
};

export default Footer;
