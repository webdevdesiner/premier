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
            <li><a href='./Alpargatas'>Alpargatas</a></li>
            <li><a href='./Bones'>Bonés</a></li>
            <li>Perfumes</li>
            <li>Relógios</li>
            <li>Chapéus</li>
            <li>Bolsas feminina Praia</li>
            <li>Pulseiras e correntes</li>
            <li><a href='./'>Home</a></li>
            <li><a href='./Carrossel'>Carrossel</a></li>
            
          </ul>
        )}
      </div>
    </div>
  );
};

export default Menu;