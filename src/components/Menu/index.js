import React, { useState } from 'react';
import './styles.css';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="dropdown">
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          Categorias
        </button>
        {isOpen && (
          <ul className="dropdown-menu">
            <li><a href='./ALPARGATAS'>ALPARGATAS</a></li>
            <li>Bonés</li>
            <li>Perfumes</li>
            <li>Relógios</li>
            <li>Chapéus</li>
            <li>Bolsa feminina Praia</li>
            <li>Pulseiras e correntes</li>
            <li>Oculos</li>
            
          </ul>
        )}
      </div>
    </div>
  );
};

export default Menu;