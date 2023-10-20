import React, { useState } from "react";
import { useDbUpdate, useDbData } from "../utilities/firebase";
import "./EditPosting.css";

const EditPosting = ({ posting, onSave, onClose }) => {
  const [editedPosting, setEditedPosting] = useState({ ...posting });
  const postingData = useDbData("/postings");
  // console.log(postingData);
  // console.log(updateData);
  const [updateData, result] = useDbUpdate(`/postings/${posting.id}`);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedPosting({ ...editedPosting, [name]: value });
  };

  const handleSave = () => {
    const updatedPosting = { ...editedPosting };
    updateData(updatedPosting);
    onSave(updatedPosting);
  };

  return (
    <div className="edit-card-overlay">
      <div className="edit-card">
        <h2>Edit Posting</h2>
        <form>
          <div className="form-group">
            <label htmlFor="type">TYPE</label>
            <select
              name="type"
              onChange={handleInputChange}
              value={editedPosting.type}
            >
              <option value="" disabled hidden></option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="unit">UNIT</label>
            <select
              name="unit"
              onChange={handleInputChange}
              value={editedPosting.unit}
            >
              <option value="" disabled hidden></option>
              <option value="house">House</option>
              <option value="studio">Studio</option>
              <option value="1br">1 Bedroom</option>
              <option value="2br">2 Bedrooms</option>
              <option value="3br">3 Bedrooms</option>
              <option value="4br+">4+ Bedrooms</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="price">PRICE / MONTH ($)</label>
            <input
              name="price"
              type="number"
              value={editedPosting.price}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="start_date">START DATE</label>
            <input
              name="start_date"
              type="date"
              value={editedPosting.start_date}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="end_date">END DATE</label>
            <input
              name="end_date"
              type="date"
              value={editedPosting.end_date}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="apt_number">APT #</label>
            <input
              name="apt_number"
              type="text"
              value={editedPosting.apt_number}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="street">STREET</label>
            <input
              name="street"
              type="text"
              value={editedPosting.address.street}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">CITY</label>
            <input
              name="city"
              type="text"
              value={editedPosting.address.city}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="state">STATE</label>
            <input
              name="state"
              type="text"
              value={editedPosting.address.state}
              onChange={handleInputChange}
            />
          </div>
          <div className="button-group">
            <button type="button" className="submit-edit-posting" onClick={handleSave}>
              Save
            </button>
            <button type="button" className="remove-edit-posting" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPosting;
