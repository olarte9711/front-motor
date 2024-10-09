import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <div className="header">
      <h1>Bienvenido a tu motor de búsqueda</h1>
      <p>Todo sobre la organización</p>
      <div className="user-profile">
        <img src="src/img/user.png" alt="Alejandro" className="user-img" />
        <span>Alejandro</span>
      </div>
    </div>
  );
};

export default Header;
