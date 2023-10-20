import "./MoreInfo.css";
import { useDbData } from "../utilities/firebase";
import GoogleMapReact from "google-map-react";

const MoreInfo = ({ data, closeHandler, latitude, longitude }) => {
  const [userData, loading, error] = useDbData(`/users/${data.user}`);

  const handleMailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const handleCallClick = (phone) => {
    window.location.href = `tel:+${phone}`;
  };

  const defaultProps = {
    center: {
      lat: latitude,
      lng: longitude,
    },
    zoom: 13,
  };

  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  return (
    <div className="overlay" onClick={closeHandler}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={closeHandler}>
          X
        </button>
        <p className="title">More Info...</p>
        <div className="subleaser">
          <p>
            Posted by: {userData?.first} {userData?.last}
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
        {userData?.age && <p>Age: {userData?.age}</p>}
        {userData?.pronouns && <p>Pronouns: {userData?.pronouns}</p>}
        {userData?.gender && <p>Gender: {userData?.gender}</p>}
        {data.type === "house" && <p>Housemates 🏠: {data.roommates}</p>}
        {data.type === "apartment" && (
          <p>Apartment-mates 🏠: {data.roommates}</p>
        )}
        <p>{data.more_info}</p>
        <div className="map" style={{ height: "32vh", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent lat={42.04994} lng={-87.67932} text="📍" />
          </GoogleMapReact>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
