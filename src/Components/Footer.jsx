import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = ({ profile, faveHandler, homeHandler }) => {
  return (
    <div className="footer">
      <button onClick={homeHandler} className="footer-btn home-btn">
        <Link className="nav-link" to="/">
          <img src="icons/Home.png" alt="Home" />
        </Link>
      </button>

      {profile?.emailVerified && (
        <button className="footer-btn post-btn">
          <Link className="nav-link" to="/make-a-post">
            <img src="icons/Add.png" alt="Make a Post" />
          </Link>
        </button>
      )}

      <button onClick={faveHandler} className="footer-btn fave-btn">
        <img src="icons/Heart.png" alt="Favorite" />
      </button>
    </div>
  );
};

export default Footer;
