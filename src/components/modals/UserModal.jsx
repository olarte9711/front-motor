import React, { useState } from 'react';
import '../../styles/Modal.css';

const UserModal = ({ closeModal }) => {
  const [name, setName] = useState('');
  const [CC, setCC] = useState('');
  const [type, setType] = useState('');
  const [area, setArea] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Nuevo Usuario:', { name, CC, type, area, email });
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
            <label htmlFor="CC">Documento</label>
            <input 
              type="text" 
              id="CC" 
              value={CC} 
              onChange={(e) => setCC(e.target.value)} 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="type">Type</label>
            <select 
              id="type" 
              value={type} 
              onChange={(e) => setType(e.target.value)}
              required
            >
              <option value="Admin">Admin</option>
              <option value="Cliente">Cliente</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="area">Area Negocio</label>
            <input 
              type="text" 
              id="area" 
              value={area} 
              onChange={(e) => setArea(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
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

export default UserModal;
