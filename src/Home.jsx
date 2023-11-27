import Header from "./Components/Header";
import Search from "./Components/Search";
import Footer from "./Components/Footer";
import Postings from "./Components/Postings";
import { useState } from "react";

const Home = ({ profile, isFavePage }) => {
  return (
    <div>
      <Header />
      <Postings isFavePage={isFavePage}/>
    </div>
  );
};

export default Home;
