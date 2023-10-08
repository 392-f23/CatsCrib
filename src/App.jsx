import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import PostingPage from "./PostingPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/make-a-post" element={<PostingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
