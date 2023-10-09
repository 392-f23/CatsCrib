import { useState, useEffect } from "react";
import { useDbData } from "../utilities/firebase.js";
import Posting from "./Posting.jsx";
import Filter from "./Filter.jsx";
import "./Postings.css";

const Postings = ({ isFavePage }) => {
  const [postings, setPostings] = useState([]);
  const [data, loading, error] = useDbData("/postings");
  const [isFiltering, setIsFiltering] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("sublet");
  const [faved, setFaved] = useState([]);

  // toggle heart component
  const toggleHeart = (data) => {
    setFaved((prevFaved) => {
      if (prevFaved.includes(data)) {
        return prevFaved.filter((item) => item !== data);
      } else {
        return [...prevFaved, data];
      }
    });
  };

  // if data exists, set the postings to the dataset
  // everytime data changes or the page reloads the postings is resetted!
  useEffect(() => {
    if (data) {
      const filteredPostings = Object.values(data).filter(
        (post) => post.category === selectedCategory
      );
      if (isFavePage) {
        setPostings(faved.filter((post) => post.category === selectedCategory));
      } else {
        setPostings(filteredPostings);
      }
    }
  }, [data, selectedCategory, isFavePage, faved]);

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
        {postings && (
          <p className="results-shown">{postings.length} RESULTS SHOWN</p>
        )}
        {postings && <button onClick={filterHandler}>FILTER ▼</button>}
      </div>
      {postings &&
        postings.map((data, index) => (
          <Posting
            key={index}
            data={data}
            index={index}
            toggleHeart={toggleHeart}
            isFaved={faved.includes(data)}
          ></Posting>
        ))}
      {isFiltering && <Filter closeHandler={filterHandler}></Filter>}
    </div>
  );
};

export default Postings;
