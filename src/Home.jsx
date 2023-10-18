import Header from "./Components/Header";
import Search from "./components/Search";
import Footer from "./Components/Footer";
import Postings from "./components/Postings";
import { useState } from "react";

const Home = ({ profile, isFavePage }) => {
  return (
    <div>
      <Header />
      <Search />
      <Postings isFavePage={isFavePage}/>
    </div>
  );
};

export default Home;
