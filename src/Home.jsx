import Header from "./Components/Header";
import Search from "./components/Search";
import Footer from "./Components/Footer";
import Postings from "./components/Postings";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Search></Search>
      <Postings></Postings>
      <Footer></Footer>
    </div>
  );
};

export default Home;
