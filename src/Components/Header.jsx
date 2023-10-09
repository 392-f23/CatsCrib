import React from "react";
import "./Header.css";
import { NavLink } from 'react-router-dom';
import { signInWithGoogle, signOut, useAuthState } from '../utilities/firebase';

const AuthButton = () => {
  const [user] = useAuthState();
  
  if (user) {
    return (
      <NavLink to="/profile">
        <img 
          className="profilePhoto" 
          src={user.photoURL || "icons/UserImage.png"} 
          alt="User Profile" 
          onClick={signOut} 
          title="Click to sign out" />
      </NavLink>
    );
  }
  return (
    <img 
      className="profilePhoto" 
      src="icons/UserImage.png" 
      alt="Sign In" 
      onClick={signInWithGoogle} 
      title="Click to sign in with Google" />
  );
};

const activation = ({isActive}) => isActive ? 'active' : 'inactive';



const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img className="logoImage" src="icons/Cat.png" alt="CatsCrib Logo" />
        <h2>CatsCrib</h2>
      </div>
      <div className="profile">
        <AuthButton />
      </div>
    </div>
  );
};

export default Header;
