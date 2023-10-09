import Header from "./Components/Header";
import Search from "./components/Search";
import Footer from "./Components/Footer";
import Postings from "./components/Postings";
import { useState } from "react";

const Home = ({ profile }) => {
  const [isFavePage, setIsFavePage] = useState(false)

  const faveHandler = () => {
    setIsFavePage(true)
  }

  const homeHandler = () => {
    setIsFavePage(false)
  }

  return (
    <div>
      <Header />
      <Search />
      <Postings isFavePage={isFavePage}/>
      <Footer profile={profile} homeHandler={homeHandler} faveHandler={faveHandler} />
    </div>
  );
};

export default Home;
