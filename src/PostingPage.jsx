import Header from "./Components/Header";
import Footer from "./Components/Footer";
import MakeAPost from "./components/MakeAPost";

const PostingPage = ({profile}) => {
  return (
    <div>
      <Header></Header>
      <MakeAPost user={profile}></MakeAPost>
      <Footer profile={profile}></Footer>
    </div>
  );
};

export default PostingPage;