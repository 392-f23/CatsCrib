import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <button className="footer-btn home-btn" onClick={null}>
        <img src="icons/Home.png" />
      </button>
      <button className="footer-btn post-btn" onClick={null}>
        <img src="icons/Add.png" />
      </button>
      <button className="footer-btn fave-btn" onClick={null}>
        <img src="icons/Heart.png" />
      </button>
    </div>
  );
};

export default Footer;
