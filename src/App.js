import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import MainContainer from './components/MainContainer';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Search />
      <MainContainer/>
    </div>
  );
}

export default App;
