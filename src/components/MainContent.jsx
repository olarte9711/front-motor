import React, { useState } from 'react';
import '../styles/MainContent.css'

const MainContent = () => {
  const [searchHistory, setSearchHistory] = useState('');
  const [selectedArea, setSelectedArea] = useState('Pagos');
  const [keywords, setKeywords] = useState('');
  const [selectedApp, setSelectedApp] = useState('Pagos');
  const [selectedFlow, setSelectedFlow] = useState('Venta');

  return (
    <div className="main-content">
      <div className="search-widget">
        <textarea 
          placeholder="Historial de respuestas aparecerá aquí..."
          value={searchHistory}
          onChange={(e) => setSearchHistory(e.target.value)}
          rows="5"
          cols="30"
        />
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="¿Cuál es tu pregunta?" />
        <button className="search-button">
            <img src="src/img/icon_search.png" alt="Buscar" className="button-icon" />
            <i className="fa fa-search"></i>
        </button>

      </div>

      {/* Filters */}
      <div className="filters">
        {/* Área Negocio: Dropdown */}
        <div>Área Negocio:
          <select value={selectedArea} onChange={(e) => setSelectedArea(e.target.value)}>
            <option value="Pagos">Pagos</option>
            <option value="Cobros">Cobros</option>
            <option value="Otros">Otros</option>
          </select>
        </div>

        {/* Palabra Claves: Text Input */}
        <div>Palabra claves:
          <input 
            type="text" 
            placeholder="Palabras clave"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
          />
        </div>

        {/* Aplicación: Dropdown */}
        <div>Aplicación:
          <select value={selectedApp} onChange={(e) => setSelectedApp(e.target.value)}>
            <option value="Pagos">Pagos</option>
            <option value="Cobros">Cobros</option>
            <option value="Otros">Otros</option>
          </select>
        </div>

        {/* Flujo: Dropdown */}
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

