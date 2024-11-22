import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/SideBar.css';
import { logout } from '../helpers/ApiHelper';

const Sidebar = ({role}) => {
  const location = useLocation(); 
  const navigate = useNavigate();
  console.log(role)

  const handleLogout = () => {
    console.log("clickl")
    logout();
    navigate('/')
  };
  

  return (
    <div className="sidebar">
      <div className="logo">
        <img src="src/img/logo.png" alt="Logo" className="logo-img" />
        <span>Motor corporativo</span>
      </div>
      <ul>
        <li className={location.pathname === '/motor' ? 'active' : ''}>
          <Link to="/motor">
            <i className="fa fa-search"></i> Búsqueda
          </Link>
        </li>
        {role === 'admin' && (
          <>
            <li className={location.pathname === '/users' ? 'active' : ''}>
              <Link to="/users">
                <i className="fa fa-users"></i> Usuarios
              </Link>
            </li>
            <li className={location.pathname === '/documents' ? 'active' : ''}>
              <Link to="/documents">
                <i className="fa fa-file"></i> Documentos
              </Link>
            </li>
          </>
        )}
        <li className={location.pathname === '/settings' ? 'active' : ''}>
              <Link to="/settings">
                <i className="fa fa-cog"></i> Ajustes
              </Link>
        </li>
      </ul>
      <div className="sidebar-footer">
        <ul>
          <li><i>Ayuda</i></li>
          <li><i>Contáctanos</i></li>
        </ul>
        <div className="logout" onClick={handleLogout}>Log out</div>
      </div>
    </div>
  );
};

export default Sidebar;

