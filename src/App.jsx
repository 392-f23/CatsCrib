import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import FavePage from "./FavePage";
import Home from "./Home";
import PostingPage from "./PostingPage";
import { useProfile } from './utilities/profile';  // Adjust the path if it's different in your setup

const App = () => {
  const [{ user, isAdmin, emailVerified }, profileLoading, profileError] = useProfile();

  // Depending on what you want to check for profile validity:
  const validProfile = user && emailVerified;  // This checks if there's a user and the email is verified
  
  if (profileError) return <h1>Error loading profile: {`${profileError}`}</h1>;
  if (profileLoading) return <h1>Loading user profile</h1>;
  // if (!validProfile) return <h1>No valid profile data</h1>;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home profile={user} />} />
        <Route path="/make-a-post" element={<PostingPage profile={user}/>} />
      </Routes>
    </Router>
  );
};

export default App;
