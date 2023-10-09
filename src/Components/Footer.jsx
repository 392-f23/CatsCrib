import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = ({ profile }) => {

  return (
    <div className="footer">
      <button className="footer-btn home-btn">
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

      <button className="footer-btn fave-btn">
        <Link className="nav-link" to="/">
          <img src="icons/Heart.png" alt="Favorite" />
        </Link>
      </button>
    </div>
  );
};

export default Footer;
