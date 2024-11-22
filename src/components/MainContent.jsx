import React, { useState } from 'react';
import '../styles/MainContent.css'
import Chat from './chat';

const MainContent = () => {
  const [selectedArea, setSelectedArea] = useState('Pagos');
  const [keywords, setKeywords] = useState('');
  const [selectedApp, setSelectedApp] = useState('Pagos');
  const [selectedFlow, setSelectedFlow] = useState('Venta');

  return (
    <div className="main-content">
 
      <Chat></Chat>
    </div>
  );
};

export default MainContent;

