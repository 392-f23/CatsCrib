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
  const [checkExists, exists, existsError] = useDbExist(
    "/users",
    user?.uid
  );
  const [addData, addResult, addError] = useDbAdd("/users", user?.uid);
  const [isDataSet, setIsDataSet] = useState(false);

  useEffect(() => {
    if (user) {
      checkExists();
    }
  }, [user]);

  useEffect(() => {
    if (exists == false && user && ! isDataSet) {
      const userData = {
        uid: user.uid,
        email: user.email,
        first: user.displayName.split(" ")[0],
        last: user.displayName.split(" ")[1],
        image: user.photoURL,
        phone: "",
        age: "",
        pronouns: "",
        gender: "",
        school: "",
      };
      addData(userData);
      setIsDataSet(true)
    }
  });

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
