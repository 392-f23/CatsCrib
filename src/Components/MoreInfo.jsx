import "./MoreInfo.css";

const MoreInfo = ({ data, closeHandler }) => {
  return (
    <div className="overlay" onClick={closeHandler}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={closeHandler}>
          X
        </button>
        <p className="title">More Info...</p>
        <p>Subleaser 🧑: {data.user}</p>
        <p>Roommates 🛏️: {data.roommates}</p>
        {data.type === 'house' && <p>Housemates 🏠: {data.housemates}</p>}
        {data.type === 'apartment' && <p>Apartment-mates 🏠: {data.housemates}</p>}
        <p>{data.more_info}</p>
      </div>
    </div>
  );
};

export default MoreInfo;
