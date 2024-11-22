import React, { useState, useEffect } from 'react';
import '../../styles/Table.css';
import DocumentModal from '../modals/DocumentModal';
import { deleteDocument, getDocuments } from '../../helpers/ApiHelper';

const DocumentsTable = () => {
  const [showModal, setShowModal] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [documents, setDocuments] = useState([]); 
  const [currentPage, setCurrentPage] = useState(1); 
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);
  const documentsPerPage = 10;

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getDocuments();
      if (data) {
        setDocuments(data); 
      }
    };
    fetchUsers(); 
  }, [showModal, refresh]);

  
  const indexOfLastUser = currentPage * documentsPerPage;
  const indexOfFirstUser = indexOfLastUser - documentsPerPage;
  const paginatedDocuments = documents.slice(indexOfFirstUser, indexOfLastUser);

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.ceil(documents.length / documentsPerPage)));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };


  const openModal = (document = null) => {
    setSelectedDocument(document); 
    setIsUpdate(!!document);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedDocument(null)
    setShowModal(false);
  };

  const handleDeleteDocument = async ( id ) => {
    const response = await deleteDocument(id);
    response
    ? (() => {
        alert('Documento eliminado correctamente');
        setRefresh((prev) => !prev);
      })()
    : alert('Error al eliminar el documento:');  
  }

  return (
    <div className="table-container">
      <div className="table-header">
        <h2>Documentos</h2>
        <button className="create-button" onClick={() => openModal(null)}>+ Agregar Documento</button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Hash</th>
            <th>Name</th>
            <th>Description</th>
            <th>URL</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {paginatedDocuments.map((doc,index) => (
            <tr key={doc.id}>
              <td>{indexOfFirstUser + index + 1}</td>
              <td>{doc.id}</td>
              <td>{doc.name}</td>
              <td>{doc.description.length > 50 ? `${doc.description.slice(0, 100)}...` : doc.description}</td>
              <td>{doc.link}</td>
              
              
              <td>
                <button onClick={() => openModal(doc)}className="edit-button">✏️</button>
                <button onClick={() => handleDeleteDocument(doc.id)} className="delete-button">❌</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination-controls">
        <button onClick={prevPage} disabled={currentPage === 1}>Anterior</button>
        <span>Página {currentPage} de {Math.ceil(documents.length / documentsPerPage)}</span>
        <button onClick={nextPage} disabled={currentPage === Math.ceil(documents.length / documentsPerPage)}>Siguiente</button>
      </div>

      {showModal && (
        <DocumentModal 
          closeModal={closeModal}
          document={selectedDocument}
          isUpdate={isUpdate}

        />
      )}
    </div>
  );
};

export default DocumentsTable;
