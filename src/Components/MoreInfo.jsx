import "./MoreInfo.css";
import { useDbData } from "../utilities/firebase";

const MoreInfo = ({ data, closeHandler }) => {
  const [userData, loading, error] = useDbData(`/users/${data.user}`);

  const handleMailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const handleCallClick = (phone) => {
    window.location.href = `tel:+${phone}`;
  };

  return (
    <div className="overlay" onClick={closeHandler}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={closeHandler}>
          X
        </button>
        <p className="title">More Info...</p>
        <div className="subleaser">
          <p>
            Subleaser 🧑: {userData?.first} {userData?.last}
          </p>
          <div className="user-buttons">
            {userData?.phone && (
              <button onClick={() => handleCallClick(userData?.phone)}>
                ☎️
              </button>
            )}
            <button
              onClick={() => handleMailClick(userData?.email)}
              className="mail-button"
            >
              💌
            </button>
          </div>
        </div>
        {data.type === "house" && <p>Housemates 🏠: {data.roommates}</p>}
        {data.type === "apartment" && (
          <p>Apartment-mates 🏠: {data.roommates}</p>
        )}
        <p>{data.more_info}</p>
      </div>
    </div>
  );
};

export default MoreInfo;
