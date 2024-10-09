import React from 'react';
import '../styles/SideBar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="logo">
            <img src="src/img/logo.png" alt="Logo" className="logo-img" />
            <span>Motor corporativo</span>
        </div>
        <ul>
            <li><i className="fa fa-search"></i> Búsqueda</li>
            <li><i className="fa fa-users"></i> Usuarios</li>
            <li><i className="fa fa-file"></i> Documentos</li>
            <li><i className="fa fa-cog"></i> Ajustes</li>
        </ul>
        <div className="sidebar-footer">
            <ul>
                <li><i>Ayuda</i></li>
                <li><i>Contáctanos</i></li>
            </ul>

        <div className="logout">Log out</div>
      </div>
    </div>
  );
};

export default Sidebar;
