import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="HeaderStyle">
      <div>
        <h2>
          CatsCrib{" "}
          <img className="logoImage" src="src/Components/HeaderImage.png" />
          <img className="profilePhoto" src="src/Components/UserImage.png" />
        </h2>
      </div>
      <div>
        <hr></hr>
      </div>
    </div>
  );
};

export default Header;
