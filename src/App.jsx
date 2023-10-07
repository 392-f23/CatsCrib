import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Search from './components/Search';
import Postings from './components/Postings';

const App = () => {
  return (
    <div className="App">
        <Header></Header>
        <Search></Search>
        <Postings></Postings>
    </div>
  );
};

export default App;
