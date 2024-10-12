import React, { useState } from 'react';
import '../../styles/Table.css';
import UserModal from '../modals/UserModal'
const UserTable = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };


  const users = [
    {
      id: '001',
      name: 'Alejandro Puentes',
      document: '10101010',
      role: 'Admin',
      businessArea: 'Tecnología',
      email: 'alejandro@organizacion.com',
    },
    {
      id: '002',
      name: 'Óscar Olarte',
      document: '10101020',
      role: 'Admin',
      businessArea: 'Tecnología',
      email: 'oscar@organizacion.com',
    },
    {
      id: '003',
      name: 'David Galeano',
      document: '10101030',
      role: 'Cliente',
      businessArea: 'Envíos',
      email: 'david@organizacion.com',
    },
    {
      id: '004',
      name: 'Carlos Díaz',
      document: '10101040',
      role: 'Cliente',
      businessArea: 'Pagos',
      email: 'carlos@organizacion.com',
    },
  ];

  return (
    <div className="table-container">
      <div className="table-header">
        <h2>Usuarios</h2>
        <button className="create-button" onClick={openModal}>+ Crear Usuario</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Documento</th>
            <th>Tipo</th>
            <th>Área Negocio</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.document}</td>
              <td>{user.role}</td>
              <td>{user.businessArea}</td>
              <td>{user.email}</td>
              <td><button className="edit-button">✏️</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && <UserModal closeModal={closeModal} />}
    </div>
  );
};

export default UserTable;
