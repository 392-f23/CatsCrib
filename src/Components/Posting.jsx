import "./Posting.css";
import { useState, useEffect } from "react";
import MoreInfo from "./MoreInfo";

const Posting = ({ data, index, toggleHeart, isFaved }) => {
  const [moreInfo, setMoreInfo] = useState(false);
  const [heart, setHeart] = useState(isFaved ? "💜" : "🤍");

  useEffect(() => {
    setHeart(isFaved ? "💜" : "🤍");
  }, [isFaved]);

  const heartHandler = () => {
    if (heart === "🤍") {
      setHeart("💜");
    } else {
      setHeart("🤍");
    }
    toggleHeart(data);
  };

  const buttonHandler = () => {
    setMoreInfo((prev) => !prev);
  };

  const convertDateFormat = (date) => {
    const parts = date.split("-");
    if (parts.length !== 3) return date;
    const year = parts[0].slice(-2);
    const month = parts[1];
    const day = parts[2];
    return `${month}/${day}/${year}`;
  };

  return (
    <div key={index} className="posting">
      <div className="heart-button" onClick={heartHandler}>
        {heart}
      </div>
      <div className="posting-image">
        {data.images && data.images.length > 0 ? (
          <img src={data.images[0]} alt="Listing Image" />
        ) : (
          <img src="https://media.self.com/photos/630635c30b7f36ce816f374a/4:3/w_2240,c_limit/DAB03919-10470989.jpg" alt="Default Listing" />
        )}
      </div>
      <div className="posting-info">
        <p className="price">${data.price}/month</p>
        <p>🛏️ 1 room in a {data.unit}</p>
        <p>
          📅 {convertDateFormat(data.start_date)} -{" "}
          {convertDateFormat(data.end_date)}
        </p>
        <p>
          📍 {data.address.street}, {data.address.city}, {data.address.state}
          {data.address.apt_number && `, Apt #${data.address.apt_number}`}
        </p>
        <div className="button-container">
          <button className="more-info-btn" onClick={buttonHandler}>
            More Info...
          </button>
        </div>
        {moreInfo && (
          <MoreInfo data={data} closeHandler={buttonHandler}></MoreInfo>
        )}
      </div>
    </div>
  );
};

export default Posting;
