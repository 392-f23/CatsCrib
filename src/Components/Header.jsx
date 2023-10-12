import { useEffect, useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { ref, get } from "@firebase/database";
import {
  signInWithGoogle,
  signOut,
  useAuthState,
  useDbAdd,
  useDbExist,
} from "../utilities/firebase";

const AuthButton = () => {
  const [user] = useAuthState();
  const [checkExists, exists, error] = useDbExist(
    "/users",
    "email",
    user?.email
  );
  const [addData, addResult] = useDbAdd("/users");
  const [dataAdded, setDataAdded] = useState(false);

  useEffect(() => {
    if (user) {
      checkExists();
    }
  }, [user, exists, addData]);

  useEffect(() => {
    if (exists === false && user && ! dataAdded) {
      const userData = {
        email: user.email,
        first: user.displayName.split(" ")[0],
        last: user.displayName.split(" ")[1],
        image: user.photoURL,
        phone: "",
        age: "",
        pronouns: "",
        gender: "",
        school: ""
      };
      addData(userData);
      setDataAdded(true);
    }
  }, [user, exists, addData]);

  if (user) {
    return (
      <NavLink to="/profile">
        <img
          className="profilePhoto"
          src={user.photoURL || "icons/UserImage.png"}
          alt="User Profile"
          title="Click to sign out"
        />
      </NavLink>
    );
  }
  return (
    <button
      className="login-button"
      onClick={signInWithGoogle}
      title="Click to sign in with Google"
    >
      Login
    </button>
  );
};

const activation = ({ isActive }) => (isActive ? "active" : "inactive");

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
