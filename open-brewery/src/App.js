import React from 'react';
import './App.css';

import Header from './components/Header';
import BreweryList from './components/BreweryList';

function App() {
  return (
    <div className='App'>
      <Header />
      <BreweryList />
    </div>
  );
}

export default App;
