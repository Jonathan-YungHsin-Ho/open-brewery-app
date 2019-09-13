import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';

import Header from './components/Header';
import BreweryList from './components/BreweryList';

function App() {
  const isFetching = useSelector(state => state.isFetching);

  return (
    <div className='App'>
      <Header />

      {isFetching && (
        <h3 className='message'>
          Fetching data, thank you for your patience...
        </h3>
      )}

      <BreweryList />
    </div>
  );
}

export default App;
