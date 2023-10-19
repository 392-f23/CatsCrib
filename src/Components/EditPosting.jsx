import React, { useState } from "react";
import { useDbUpdate, useDbData } from "../utilities/firebase";
import "./MakeAPost.css";

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
    <div className="edit-card">
      <h2>Edit Posting</h2>
      <form>
        <div className="form-group">
          <label htmlFor="type">Type</label>
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
          <label htmlFor="unit">Unit</label>
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
          <label htmlFor="price">Price / Month ($)</label>
          <input
            name="price"
            type="number"
            value={editedPosting.price}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="start_date">Start Date</label>
          <input
            name="start_date"
            type="date"
            value={editedPosting.start_date}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="end_date">End Date</label>
          <input
            name="end_date"
            type="date"
            value={editedPosting.end_date}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="apt_number">Apt Number</label>
          <input
            name="apt_number"
            type="text"
            value={editedPosting.apt_number}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="street">Street</label>
          <input
            name="street"
            type="text"
            value={editedPosting.address.street}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            name="city"
            type="text"
            value={editedPosting.address.city}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State</label>
          <input
            name="state"
            type="text"
            value={editedPosting.address.state}
            onChange={handleInputChange}
          />
        </div>
        {/* Add more form fields as needed */}
        <div className="button-group">
          <button type="button" className="submit" onClick={handleSave}>
            Save
          </button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPosting;
