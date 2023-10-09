import Header from "./Components/Header";
import Search from "./components/Search";
import Footer from "./Components/Footer";
import Postings from "./components/Postings";

const FavePage = ({ profile }) => {
  return (
    <div>
      <Header />
      <Search />
      <Postings select={"fave"}/>
      <Footer profile={profile} />
    </div>
  );
};

export default FavePage;