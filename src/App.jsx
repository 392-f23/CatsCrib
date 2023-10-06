import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Search from './components/Search';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
        <Header></Header>
        <Search></Search>
    </div>
  );
};

export default App;
