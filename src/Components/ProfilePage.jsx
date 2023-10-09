import React from "react";
import "./ProfilePage.css";
import Footer from "./Footer";
import { signOut } from "../utilities/firebase";
import { Link, useNavigate } from "react-router-dom";

const ProfilePage = ({ user }) => {
  const navigate = useNavigate();
  if (!user) {
    return null; // or you can return some default content
  }
  const handleSignOut = async () => {
    try {
      await signOut();
      navigate("/");
    } catch (error) {
      console.error("Failed to sign out:", error);
    }
  };

  return (
    <div>
      <div className="profile-content">
        <img
          className="profile-page-photo"
          src={user.photoURL}
          alt="User Profile"
        />
        <h2>{user.displayName}</h2>
        <div className="profile-info">
          <p>📧 {user.email}</p>
          <p>☎️ 718-749-6412</p>
          <p>⚥ He/Him</p>
        </div>
        <button className="sign-out" onClick={handleSignOut}>
          Sign Out!
        </button>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ProfilePage;
