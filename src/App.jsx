import React from 'react';
import Sidebar from './components/SideBar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-section">
        <Header />
        <MainContent />
      </div>
    </div>
  );
};

export default App;

