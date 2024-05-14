import './App.css';
import React from 'react';
import { Navbar } from './components/Navbar';
import Restaurant from './components/Restaurant';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Restaurant/>
      <Footer/>
    </div>
  );
}

export default App;
