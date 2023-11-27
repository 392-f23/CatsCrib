import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { useState } from 'react';
import FavePage from "./FavePage";
import Home from "./Home";
import PostingPage from "./PostingPage";
import { useProfile } from './utilities/profile'; 
import ProfilePage from './Components/ProfilePage';
import Footer from "./Components/Footer";  

const App = () => {
  const [{ user, isAdmin, emailVerified }, profileError] = useProfile();
  const [isFavePage, setIsFavePage] = useState(false);

  const validProfile = user && emailVerified;

  const faveHandler = () => {
    setIsFavePage(true);
  };

  const homeHandler = () => {
    setIsFavePage(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home profile={user} isFavePage={isFavePage} />} />
        <Route path="/make-a-post" element={<PostingPage profile={user}/>} />
        <Route path="/profile" element={<ProfilePage user={user} />} />
      </Routes>
      <Footer profile={user} homeHandler={homeHandler} faveHandler={faveHandler} />
    </Router>
  );
};

export default App;

