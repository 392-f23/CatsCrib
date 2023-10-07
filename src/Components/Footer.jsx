import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <button className="home-btn" onClick={null}>
        <img src="icons/Home.png" />
      </button>
      <button className="post-btn" onClick={null}>
        <img src="icons/Add.png" />
      </button>
      <button className="fave-btn" onClick={null}>
        <img src="icons/Heart.png" />
      </button>
    </div>
  );
};

export default Footer;
