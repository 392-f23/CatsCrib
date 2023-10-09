import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = ({ profile }) => {
  // Helper function to check the email ending
  const isNorthwesternEmail = (email) => {
    return email?.endsWith('@u.northwestern.edu') || email?.endsWith('@northwestern.edu');
  };

  return (
    <div className="footer">
      <button className="footer-btn home-btn">
        <Link className="nav-link" to="/">
          <img src="icons/Home.png" alt="Home" />
        </Link>
      </button>

      {profile?.emailVerified && isNorthwesternEmail(profile.email) && (
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
