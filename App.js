import { org, action, comedy, horror } from './components/constants/Urls'
import React from 'react';
import Navbar from './components/navbar/navbar';
import "./App.css"
import Banner from './components/banner/banner';
import Rowpost from './components/rowpost/Rowpost';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />

      <Rowpost url={org} title='Netflix Originals' />
      <Rowpost url={action} title='Action' isSmall />
      <Rowpost url={comedy} title='comedy' isSmall />
      <Rowpost url={horror} title='horror' isSmall />


    </div>
  );
}

export default App;
