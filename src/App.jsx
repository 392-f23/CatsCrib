import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Search from './components/Search';

const App = () => {
  return (
    <div className="App">
        <Header></Header>
        <Search></Search>
    </div>
  );
};

export default App;
