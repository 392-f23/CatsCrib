import Header from "./Components/Header";
import Search from "./components/Search";
import Footer from "./Components/Footer";
import Postings from "./Components/Postings";

const FavePage = ({ profile }) => {
  return (
    <div>
      <Header />
      <Postings select={"fave"}/>
    </div>
  );
};

export default FavePage;