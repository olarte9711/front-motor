import React, { useState } from 'react';
import '../../styles/Table.css';
import DocumentModal from '../modals/DocumentModal';

const DocumentsTable = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const documents = [
    { name: 'app-ventas', status: 'Disponible', category: 'Ventas, IT', url: 'https://organizacion/ventas', date: '20 Feb, 2024', id: '0001' },
    { name: 'publicidad', status: 'Disponible', category: 'Ventas, IT', url: 'https://organizacion/publicidad', date: '22 Feb, 2024', id: '0002' },
    { name: 'envios', status: 'No Disponible', category: 'Envios, IT', url: 'https://organizacion/envios', date: '22 Feb, 2024', id: '0003' },
    { name: 'pagos', status: 'Disponible', category: 'Pagos, Finanzas, IT', url: 'https://organizacion/pagos', date: '22 Feb, 2024', id: '0004' },
  ];

  return (
    <div className="table-container">
      <div className="table-header">
        <h2>Documentos</h2>
        <button className="create-button" onClick={openModal}>+ Agregar Documento</button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Category</th>
            <th>URL</th>
            <th>Fecha</th>
            <th>ID</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc) => (
            <tr key={doc.id}>
              <td>{doc.name}</td>
              <td>{doc.status}</td>
              <td>{doc.category}</td>
              <td><a href={doc.url} target="_blank" rel="noopener noreferrer">{doc.url}</a></td>
              <td>{doc.date}</td>
              <td>{doc.id}</td>
              <td><button className="edit-button">✏️</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && <DocumentModal closeModal={closeModal} />}
    </div>
  );
};

export default DocumentsTable;
