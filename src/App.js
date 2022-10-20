import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Componets/Home';
import Section from './Componets/Section';
import Header from './Componets/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home />
    </div>
  );
}

export default App;
