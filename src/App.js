import React from 'react';
import cerner from './Cerner_Corporation_logo.png';
import ProjectsList from './ProjectsList.js';
import MenuItems from './MenuItems.js';
import './App.css';
/*<TimeCodes />
<FoodFridayBot />
<TeamInfo />
<How-Tos />
<ImportLinks />*/
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={cerner} className="App-logo" alt="logo" />
        <p>
          Welcome to the Worklist Dev - Bob Ross Ultras Homepage
        </p>
        <ProjectsList data={MenuItems.Projects} />

      </header>
    </div>
  );
}

export default App;
