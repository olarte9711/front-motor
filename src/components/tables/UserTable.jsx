import React, { useState, useEffect } from 'react';
import '../../styles/Table.css';
import UserModal from '../modals/UserModal';
import { deleteUser, getUsers } from '../../helpers/ApiHelper';

const UserTable = () => {
  const [showModal, setShowModal] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [users, setUsers] = useState([]); 
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);
 
  const usersPerPage = 10;

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
      if (data) {
        setUsers(data); 
      }
    };
    fetchUsers(); 
  }, [showModal, refresh]);

  const openModal = (user = null) => {
    setSelectedUser(user); 
    setIsUpdate(!!user);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedUser(null);
    setShowModal(false);
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const paginatedUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.ceil(users.length / usersPerPage)));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleDeleteUser = async ( id ) => {
    const response = await deleteUser(id);
    response
    ? (() => {
        alert('Usuario eliminado correctamente');
        setRefresh((prev) => !prev);
      })()
    : alert('Error al eliminar el Usuario:');  
  }

  return (
    <div className="table-container">
      <div className="table-header">
        <h2>Usuarios</h2>
        <button className="create-button" onClick={() => openModal(null)}>+ Crear Usuario</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Hash</th>
            <th>Nombre</th>
            <th>Rol</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {paginatedUsers.map((user, index) => (
            <tr key={user.id}>
              <td>{indexOfFirstUser + index + 1}</td>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.rol}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => openModal(user)} className="edit-button">✏️</button>
                <button onClick={() => handleDeleteUser(user.id)} className="delete-button">❌</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="pagination-controls">
        <button onClick={prevPage} disabled={currentPage === 1}>Anterior</button>
        <span>Página {currentPage} de {Math.ceil(users.length / usersPerPage)}</span>
        <button onClick={nextPage} disabled={currentPage === Math.ceil(users.length / usersPerPage)}>Siguiente</button>
      </div>

      {showModal && (
        <UserModal 
          closeModal={closeModal} 
          user={selectedUser} 
          isUpdate={isUpdate} 
        />
      )}
    </div>
  );
};

export default UserTable;
