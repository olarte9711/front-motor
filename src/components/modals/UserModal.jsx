import React, { useState, useEffect } from 'react';
import '../../styles/Modal.css';
import { createUser } from '../../helpers/ApiHelper';

const UserModal = ({ closeModal, user, isUpdate }) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(name, role, email, password)
    console.log('Nuevo Usuario:', { name, role, email, password });
    closeModal();
  };

  useEffect(() => {
    if (user) {
      setName(user.name || '');
      setRole(user.role || '');
      setEmail(user.email || '');
      setPassword(user.password || '');
    }
  }, [user]);

  return (
    <div className="modal-overlay">
    <div className="modal-content">
      <h2>{isUpdate ? 'Actualizar Usuario' : 'Crear Nuevo Usuario'}</h2>
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
          <label htmlFor="role">Rol</label>
          <select 
            id="role" 
            value={role} 
            onChange={(e) => setRole(e.target.value)} 
            required
          >
            <option value="">Seleccione un rol</option>
            <option value="admin">Admin</option>
            <option value="cliente">Cliente</option>
          </select>
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
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <div className="modal-actions">
          <button type="submit" className="submit-btn">
            {isUpdate ? 'Actualizar' : 'Crear'}
          </button>
          <button type="button" className="cancel-btn" onClick={closeModal}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default UserModal;
