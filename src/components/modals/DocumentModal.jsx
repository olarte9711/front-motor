import React, { useState } from 'react';
import '../../styles/Modal.css';

const DocumentModal = ({ closeModal }) => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('Disponible');
  const [category, setCategory] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Nuevo Documento:', { name, status, category, url });
    closeModal();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Crear Nuevo Usuario</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input 
              type="text" 
              id="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select 
              id="status" 
              value={status} 
              onChange={(e) => setStatus(e.target.value)}
              required
            >
              <option value="Disponible">Disponible</option>
              <option value="No Disponible">No Disponible</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="category">Categoria</label>
            <input 
              type="text" 
              id="category" 
              value={category} 
              onChange={(e) => setCategory(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="url">Url</label>
            <input 
              type="url" 
              id="url" 
              value={url} 
              onChange={(e) => setUrl(e.target.value)} 
              required 
            />
          </div>
          <div className="modal-actions">
            <button type="submit" className="submit-btn">Crear</button>
            <button type="button" className="cancel-btn" onClick={closeModal}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DocumentModal;
