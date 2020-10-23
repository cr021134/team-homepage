import React from 'react';
import cerner from './Cerner_Corporation_logo.png';
import CodeRepositories from './CodeRepositories.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={cerner} className="App-logo" alt="logo" />
        <p>
          Welcome to the Bob Ross Ultras Homepage
        </p>
        <CodeRepositories />
      </header>
    </div>
  );
}

export default App;
