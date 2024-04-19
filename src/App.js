import './App.css';
import React from 'react';
import { Navbar } from './components/Navbar';
import Restaurant from './components/Restaurant';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Restaurant/>
    </div>
  );
}

export default App;
