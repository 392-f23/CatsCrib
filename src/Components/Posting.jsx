import "./Posting.css";
import React, { useState, useEffect, useRef } from 'react';
import MoreInfo from "./MoreInfo";
import {
  setKey,
  setDefaults,
  setLanguage,
  setRegion,
  fromAddress,
  fromLatLng,
  fromPlaceId,
  setLocationType,
  geocode,
  RequestType,
} from "react-geocode";

const Posting = ({ data, index, toggleHeart, isFaved }) => {
  const [moreInfo, setMoreInfo] = useState(false);
  const [heart, setHeart] = useState(isFaved ? "💜" : "🤍");

  ///////////////////////////////////////////////////////////////////////////////////////////////////
  const [geolocation, setGeolocation] = useState({lat: 42.04994, lng: -87.67932});
  
  //var geocoder = new google.maps.Geocoder();
  var address = data.address.street + ', ' + data.address.city + ', ' + data.address.state
 

  setDefaults({
    key: "", // Your API key here.
    language: "en", // Default language for responses.
    region: "es", // Default region for responses.
  });

  fromAddress(address)
  .then(({ results }) => {
    //setGeolocation({lat: results[0].geometry.location.lat, lng: results[0].geometry.location.lng});
  })
  .catch(console.error);

  ///////////////////////////////////////////////////////////////////////////////////////////////////

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

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (currentImageIndex < data.images.length - 1) {
      setCurrentImageIndex(prevIndex => prevIndex + 1);
    } else {
      setCurrentImageIndex(0);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(prevIndex => prevIndex - 1);
    } else {
      setCurrentImageIndex(data.images.length - 1);
    }
  };

  return (
    <div key={index} className="posting">
      <div className="heart-button" onClick={heartHandler}>
        {heart}
      </div>
      <div className="posting-image">
        {data.images && data.images.length > 0 ? (
          <>
            <img src={data.images[currentImageIndex]} alt="Listing Image" />
            {data.images.length > 1 && (
              <>
                <button className="carousel-btn prev" onClick={prevImage}>
                  ❮
                </button>
                <button className="carousel-btn next" onClick={nextImage}>
                  ❯
                </button>
              </>
            )}
          </>
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
          <MoreInfo data={data} closeHandler={buttonHandler} latitude={geolocation.lat} longitude={geolocation.lng}></MoreInfo>
        )}
      </div>
    </div>
  );
};

export default Posting;
