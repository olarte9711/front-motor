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

      <div className="filters">
        <div>Área Negocio:
          <select value={selectedArea} onChange={(e) => setSelectedArea(e.target.value)}>
            <option value="Pagos">Pagos</option>
            <option value="Cobros">Cobros</option>
            <option value="Otros">Otros</option>
          </select>
        </div>

        <div>Palabra claves:
          <input 
            type="text" 
            placeholder="Palabras clave"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
          />
        </div>

        <div>Aplicación:
          <select value={selectedApp} onChange={(e) => setSelectedApp(e.target.value)}>
            <option value="Pagos">Pagos</option>
            <option value="Cobros">Cobros</option>
            <option value="Otros">Otros</option>
          </select>
        </div>

        <div>Flujo:
          <select value={selectedFlow} onChange={(e) => setSelectedFlow(e.target.value)}>
            <option value="Venta">Venta</option>
            <option value="Compra">Compra</option>
            <option value="Otros">Otros</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default MainContent;

