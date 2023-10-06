import "./Search.css";
import { useState } from "react";

const Search = () => {
  const [input, setInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    // put code to filter out the postings!
  };

  const changeHandler = (e) => {
    setInput(e.target.value)
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        className="search"
        type="text"
        name="search"
        placeholder="Search..."
        onChange={(e) => changeHandler(e)}
      ></input>
    </form>
  );
};

export default Search;
