import "./Filter.css";
import React, { useState, useEffect } from "react";

const Filter = ({ closeHandler, onFilterSubmit, initialFilters }) => {
  const [type, setType] = useState(initialFilters.type || "");
  const [unit, setUnit] = useState(initialFilters.unit || "");
  const [roommates, setRoommates] = useState(initialFilters.roommates || "");
  const [startDate, setStartDate] = useState(initialFilters.startDate || "");
  const [endDate, setEndDate] = useState(initialFilters.endDate || "");
  const [price, setPrice] = useState(initialFilters.price || "");
  const [sortBy, setSortBy] = useState(initialFilters.sortBy || "");
  const clearFilters = () => {
    // Resetting filter values
    setType("");
    setUnit("");
    setRoommates("");
    setStartDate("");
    setEndDate("");
    setPrice("");
    setSortBy("");
    
    // Submitting the cleared filters back to the parent component
    onFilterSubmit({
      type: "",
      unit: "",
      roommates: "",
      startDate: "",
      endDate: "",
      price: "",
      sortBy: ""
    });
  };
  
  
  useEffect(() => {
    onFilterSubmit({
      type,
      unit,
      roommates,
      startDate,
      endDate,
      price,
      sortBy
    });
  }, [type, unit, roommates, startDate, endDate, price, sortBy]);
  
  return (
    <div className="overlay-filter" onClick={closeHandler}>
      <div className="filters">
        <label>Types:
          <select value={type} onChange={e => setType(e.target.value)}>
            <option value="">Select</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
          </select>
        </label>
  
        <label>Unit:
          <select value={unit} onChange={e => setUnit(e.target.value)}>
            <option value="house">House</option>
            <option value="studio">Studio</option>
            <option value="1br">1 Bedroom</option>
            <option value="2br">2 Bedrooms</option>
            <option value="3br">3 Bedrooms</option>
            <option value="4br+">4+ Bedrooms</option>
          </select>
        </label>
  
        <label>Number of Roommates:
          <input
            type="number"
            value={roommates}
            onChange={e => setRoommates(e.target.value)}
            min="1"
            max="12"
          />
        </label>
  
        <label>Start Date:
          <input
            type="date"
            value={startDate}
            onChange={e => setStartDate(e.target.value)}
          />
        </label>
  
        <label>End Date:
          <input
            type="date"
            value={endDate}
            onChange={e => setEndDate(e.target.value)}
          />
        </label>
  
        <label>Price:
          <input
            type="number"
            value={price}
            onChange={e => setPrice(e.target.value)}
            min="0"
          />
        </label>
  
        <label>Sort By:
          <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
            <option value="">Select</option>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="priceHighToLow">Price: High to Low</option>
          </select>
        </label>
        <button className="clear-button" onClick={clearFilters}>
          Clear Filters
        </button>
      </div>
    </div>
  );
  
};

export default Filter;
