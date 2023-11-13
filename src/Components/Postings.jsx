import { useState, useEffect } from "react";
import { useDbData } from "../utilities/firebase.js";
import Posting from "./Posting.jsx";
import Filter from "./Filter.jsx";
import "./Postings.css";

const Postings = ({ isFavePage }) => {
  const [filters, setFilters] = useState({});
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
  const handleFilterSubmit = (newFilters) => {
    setFilters(newFilters);
  };

  // if data exists, set the postings to the dataset
  // everytime data changes or the page reloads the postings is resetted!
  useEffect(() => {
    if (data) {
      let filteredPostings = Object.values(data).filter(
        (post) => post.category === selectedCategory
      );

      if (filters.type) {
        filteredPostings = filteredPostings.filter(
          (post) => post.type === filters.type
        );
      }

      if (filters.unit) {
        filteredPostings = filteredPostings.filter(
          (post) => post.unit === filters.unit
        );
      }

      if (filters.roommates) {
        filteredPostings = filteredPostings.filter(
          (post) => post.roommates === filters.roommates
        );
      }

      if (filters.startDate) {
        filteredPostings = filteredPostings.filter(
          (post) => new Date(post.start_date) >= new Date(filters.startDate)
        );
      }

      if (filters.endDate) {
        filteredPostings = filteredPostings.filter(
          (post) => new Date(post.end_date) <= new Date(filters.endDate)
        );
      }

      if (filters.price) {
        filteredPostings = filteredPostings.filter(
          (post) => post.price <= filters.price
        );
      }

      // Sorting
      if (filters.sortBy === "priceLowToHigh") {
        filteredPostings.sort(
          (a, b) => parseFloat(a.price) - parseFloat(b.price)
        );
      } else if (filters.sortBy === "priceHighToLow") {
        filteredPostings.sort(
          (a, b) => parseFloat(b.price) - parseFloat(a.price)
        );
      }

      if (isFavePage) {
        setPostings(faved.filter((post) => post.category === selectedCategory));
      } else {
        setPostings(filteredPostings);
      }
    }
  }, [data, selectedCategory, isFavePage, faved, filters]);

  // function for filter popup on the side
  const filterHandler = () => {
    console.log("Filter button clicked!");
    setIsFiltering((prev) => !prev);
  };

  return (
    <div className="postings">
      <div className="category-buttons">
        <button
          className={selectedCategory === "sublet" ? "active" : ""}
          onClick={() => setSelectedCategory("sublet")}
        >
          Sublet
        </button>
        <button
          className={selectedCategory === "roommate" ? "active" : ""}
          onClick={() => setSelectedCategory("roommate")}
        >
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
      {isFiltering && (
        <Filter
          closeHandler={filterHandler}
          onFilterSubmit={handleFilterSubmit}
          initialFilters={{
            type: filters.type,
            unit: filters.unit,
            roommates: filters.roommates,
            startDate: filters.startDate,
            endDate: filters.endDate,
            price: filters.price,
            sortBy: filters.sortBy,
          }}
        />
      )}
    </div>
  );
};

export default Postings;
