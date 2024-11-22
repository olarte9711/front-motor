import React, { useState, useEffect } from 'react';
import '../../styles/Modal.css';
import { createDocument } from '../../helpers/IAHelper';

const DocumentModal = ({ closeModal, document, isUpdate }) => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createDocument(name, url)
    console.log('Nuevo Documento:', { name, url });
    closeModal();
  };

  useEffect(() => {
    if (document) {
      setName(document.name || '');
      setUrl(document.link || '');
    }
  }, [document]);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
      <h2>{isUpdate ? "Actualizar documento" : "Crear Nuevo Documento" }</h2>
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
          <button type="submit" className="submit-btn">
            {isUpdate ? 'Actualizar' : 'Crear'}
          </button>
            <button type="button" className="cancel-btn" onClick={closeModal}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DocumentModal;
