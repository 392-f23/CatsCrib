import { useState, useEffect } from "react";
import { useDbData } from "../utilities/firebase.js";
import Posting from "./Posting.jsx";
import './Postings.css'


const Postings = () => {
  const [postings, setPostings] = useState([]);
  const [data, loading, error] = useDbData("/postings");

  // if data exists, set the postings to the dataset
  // everytime data changes or the page reloads the postings is resetted!
  useEffect(() => {
    if (data) {
      setPostings(data);
    }
  }, [data]);

  return (
    <div className="postings">
      {data && <p className="results-shown">{data.length} RESULTS SHOWN</p>}
      {postings.map((data, index) => (
        <Posting key={index} data={data} index={index}></Posting>
      ))}
    </div>
  );
};

export default Postings;
