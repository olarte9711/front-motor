import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Motor from './components/Motor';
import Login from './components/Login';
import UserView from './components/views/UserView';
import DocumentsView from './components/views/DocumentsView';

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/motor" element={<Motor />} />
      <Route path="/users" element={<UserView />} />
      <Route path="/documents" element={<DocumentsView />} />
    </Routes>
  </Router>
  );
};

export default App;

