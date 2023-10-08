import { useState, useEffect } from "react";
import { useDbData } from "../utilities/firebase.js";
import { Link } from "react-router-dom";
import Posting from "./Posting.jsx";
import Filter from "./Filter.jsx";
import "./Postings.css";

const Postings = () => {
  const [postings, setPostings] = useState([]);
  const [data, loading, error] = useDbData("/postings");
  const [isFiltering, setIsFiltering] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("sublet");


  // if data exists, set the postings to the dataset
  // everytime data changes or the page reloads the postings is resetted!
  useEffect(() => {
    if (data) {
      const filteredPostings = Object.values(data).filter(post => post.category === selectedCategory);
      setPostings(filteredPostings);
    }
}, [data, selectedCategory]);


  // function for filter popup on the side
  const filterHandler = () => {
    setIsFiltering((prev) => !prev);
  };

  return (
    <div className="postings">
      <div className="category-buttons">
        <button 
          className={selectedCategory === "sublet" ? "active" : ""} 
          onClick={() => setSelectedCategory("sublet")}>
          Sublet
        </button>
        <button 
          className={selectedCategory === "roommate" ? "active" : ""} 
          onClick={() => setSelectedCategory("roommate")}>
          Roommate
        </button>
      </div>
      <div className="filter-and-sort">
        {data && <p className="results-shown">{data.length} RESULTS SHOWN</p>}
        {data && <button onClick={filterHandler}>FILTER ▼</button>}
      </div>
      {postings.map((data, index) => (
        <Posting key={index} data={data} index={index}></Posting>
      ))}
      {isFiltering && <Filter closeHandler={filterHandler}></Filter>}
    </div>
  );
};

export default Postings;
