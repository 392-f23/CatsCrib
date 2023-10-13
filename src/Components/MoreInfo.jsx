import "./MoreInfo.css";
import { useDbData } from "../utilities/firebase";

const MoreInfo = ({ data, closeHandler }) => {

  const [userData, loading, error] = useDbData(`/users/${data.user}`);

  const handleMailClick = () => {
    window.location.href = "mailto:example2024@u.northwestern.edu";
  };

  const handleCallClick = () => {
    window.location.href = "tel:+1234567890";
  };

  return (
    <div className="overlay" onClick={closeHandler}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={closeHandler}>
          X
        </button>
        <p className="title">More Info...</p>
        <div className="subleaser">
          <p>Subleaser 🧑: {data.user}</p>
          <div className="user-buttons">
            <button onClick={handleCallClick}>☎️</button>
            <button onClick={handleMailClick} className="mail-button">
              💌
            </button>
          </div>
        </div>
        <p>Roommates 🛏️: {data.roommates}</p>
        {data.type === "house" && <p>Housemates 🏠: {data.housemates}</p>}
        {data.type === "apartment" && (
          <p>Apartment-mates 🏠: {data.housemates}</p>
        )}
        <p>{data.more_info}</p>
      </div>
    </div>
  );
};

export default MoreInfo;
