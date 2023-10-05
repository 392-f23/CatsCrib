import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>
    </div>


  );
};

export default App;
