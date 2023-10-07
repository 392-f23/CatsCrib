import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Search from './components/Search';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="App">
        <Header></Header>
        <Search></Search>
        <Footer></Footer>
    </div>
  );
};

export default App;
