import { useState, useEffect } from "react";
import "./ProfilePage.css";
import Footer from "./Footer";
import { signOut, useDbData, useDbUpdate } from "../utilities/firebase";
import { useNavigate } from "react-router-dom";

const ProfilePage = ({ user }) => {
  const navigate = useNavigate();
  const [updateData, updateResult] = useDbUpdate(`/users/${user?.uid}`);
  const [isEditable, setIsEditable] = useState(false);
  const [userData, loading, error] = useDbData(`/users/${user?.uid}`);
  const [phone, setPhone] = useState(userData?.phone || "");
  const [age, setAge] = useState(userData?.age || "");
  const [pronouns, setPronouns] = useState(userData?.pronouns || "");
  const [gender, setGender] = useState(userData?.gender || "");
  const [school, setSchool] = useState(userData?.school || "");

  const userPostingsPath = `/postings`;
  const [postingsData, postingsLoading, postingsError] = useDbData(userPostingsPath);

  const [selectedPosting, setSelectedPosting] = useState([]);

  let user_postings = [];
  if (postingsData && user) {
    const postingsArray = Object.values(postingsData);
    user_postings = postingsArray.filter(posting => posting.user === user.uid);
  }

  useEffect(() => {
    if (userData) {
      setPhone(userData.phone || "");
      setAge(userData.age || "");
      setPronouns(userData.pronouns || "");
      setGender(userData.gender || "");
      setSchool(userData.school || []);
    }
  }, [userData]);

  if (!user) {
    return null;
  }

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate("/");
    } catch (error) {
      console.error("Failed to sign out:", error);
    }
  };

  const profileButtonHandler = () => {
    setIsEditable(false);
    const updatedUserData = {
      phone: phone,
      age: age,
      pronouns: pronouns,
      gender: gender,
      school: school,
    };
    updateData(updatedUserData);
  };

  return (
    <div className="profile-page">
      <div className="profile-content">
        <img
          className="profile-page-photo"
          src={user.photoURL}
          alt="User Profile"
        />
        <h2 className="profile-name">{user.displayName}</h2>
        <div className="profile-info">
          <button className="edit-btn" onClick={() => setIsEditable(true)}>
            ✍
          </button>
          <p className="filter-tag-profile">EMAIL</p>
          <p className="email-profile">{user.email}</p>
          <p className="filter-tag-profile">PHONE NUMBER</p>
          <input
            placeholder="-"
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            readOnly={!isEditable}
            className={isEditable ? "editable" : "not-editable"}
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          ></input>
          <p className="filter-tag-profile">AGE</p>
          <input
            placeholder="-"
            type="number"
            id="age"
            name="age"
            readOnly={!isEditable}
            className={isEditable ? "editable" : "not-editable"}
            onChange={(e) => setAge(e.target.value)}
            value={age}
          ></input>
          <p className="filter-tag-profile">PRONOUNS</p>
          <select
            disabled={!isEditable}
            name="pronouns"
            className={
              isEditable ? "editable dropdown" : "not-editable dropdown"
            }
            onChange={(e) => setPronouns(e.target.value)}
            value={pronouns}
          >
            <option value="-">-</option>
            <option value="She/Her">She/Her</option>
            <option value="He/Him">He/Him</option>
            <option value="They/Them">They/Them</option>
            <option value="Other">Other</option>
          </select>
          <p className="filter-tag-profile">GENDER</p>
          <select
            disabled={!isEditable}
            name="gender"
            className={
              isEditable ? "editable dropdown" : "not-editable dropdown"
            }
            onChange={(e) => setGender(e.target.value)}
            value={gender}
          >
            <option value="-">-</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Other">Other</option>
          </select>
          <p className="filter-tag-profile">SCHOOL</p>
          <select
            disabled={!isEditable}
            multiple
            name="school"
            className={
              isEditable
                ? "editable dropdown school"
                : "not-editable dropdown school"
            }
            onChange={(e) => {
              const selectedSchools = Array.from(e.target.selectedOptions).map(
                (option) => option.value
              );
              setSchool(selectedSchools);
            }}
          >
            <option value="McCormick" selected={school.includes("McCormick")}>
              McCormick
            </option>
            <option value="Weinberg" selected={school.includes("Weinberg")}>
              Weinberg
            </option>
            <option value="Medill" selected={school.includes("Medill")}>
              Medill
            </option>
            <option value="SoC" selected={school.includes("SoC")}>
              SoC
            </option>
            <option value="SESP" selected={school.includes("SESP")}>
              SESP
            </option>
            <option value="Kellogg" selected={school.includes("Kellogg")}>
              Kellogg
            </option>
          </select>

          {isEditable && (
            <button className="save-btn" onClick={profileButtonHandler}>
              Save
            </button>
          )}
        </div>
        <button className="my_posts" onClick={() => setSelectedPosting(user_postings)}>
          My Posts
        </button>
        {selectedPosting.map((posting, index) => (
          <div key={index} className="posting-card">
            <p>Address: {posting.address.street}, {posting.address.city}, {posting.address.state}</p>
            <p>Apt Number: {posting.apt_number}</p>
            <div className="edit-buttons">
      <button className="edit-button" onClick={() => handleEdit(posting)}>
        Edit
      </button>
      <button className="remove-btn" onClick={() => handleRemove(posting)}>
        Remove
      </button>
    </div>
            </div>))}


            
        <button className="sign-out" onClick={handleSignOut}>
          😔 Sign Out! 😔
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
