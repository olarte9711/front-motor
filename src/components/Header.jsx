import React from 'react';
import '../styles/Header.css';

const Header = ({ name }) => {
  return (
    <div className="header">
      <h1>Bienvenido a tu motor de búsqueda</h1>
      <p>Todo sobre la organización</p>
      <div className="user-profile">
        <img src="src/img/user.png" alt={name || "Usuario"} className="user-img" />
        <span>{name || "Usuario"}</span>
      </div>
    </div>
  );
};

export default Header;
