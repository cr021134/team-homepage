import React from 'react';
import cerner from './Cerner_Corporation_logo.png';
import MenuGroupLink from './MenuGroupLink.js';
import MenuItems from './MenuItems.js';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={cerner} className="App-logo" alt="logo" />
        <p>
          Welcome to the Bob Ross Ultras Homepage
        </p>
        <MenuGroupLink header="Code Repositories" links={MenuItems.codeRepositories} />
      </header>
    </div>
  );
}

export default App;
