import Header from "./Components/Header";
import Search from "./components/Search";
import Footer from "./Components/Footer";
import Postings from "./components/Postings";

const Home = ({ profile }) => {
  return (
    <div>
      <Header />
      <Search />
      <Postings />
      <Footer profile={profile} />
    </div>
  );
};

export default Home;
