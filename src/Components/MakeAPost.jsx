import React from "react";
import "./MakeAPost.css";

const MakeAPost = () => {
  return (
    <div className="post-container">
      <h2>Make a posting</h2>
      <form>
        <input type="number" placeholder="Price/month" />
        <div className="dates">
          <div>
            <p>START DATE</p>
            <input type="date" placeholder="Start Date" />
          </div>
          <div>
            <p>END DATE</p>
            <input type="date" placeholder="END Date" />
          </div>
        </div>
        <select>
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
        </select>
        <input type="text" placeholder="Apt/House Number" />
        <input type="text" placeholder="Street" />
        <input type="text" placeholder="City" />
        <input type="text" placeholder="State" />
        <input type="text" placeholder="Postal Code" />
        <select>
          <option value="studio">Studio</option>
          <option value="1br">1 Bedroom</option>
          <option value="2br">2 Bedrooms</option>
          <option value="3br">3 Bedrooms</option>
          <option value="3br">4+ Bedrooms</option>
        </select>
        <input type="number" placeholder="Roommates (0-3)" min="0" max="3" />
        <input type="number" placeholder="Housemates (0-15)" min="0" max="15" />
        <input type="file" className="upload-images" multiple />
        <textarea placeholder="More info (optional)" maxLength="200"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MakeAPost;
