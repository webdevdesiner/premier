import React, { useState } from 'react'
import './styles.css'
import Alpargata from '../../Pages/Alpargata';

const Menu = () => {

  const [menuVisible, setMenuVisible] = useState(false);


  return (
    <div className='menuArea'>
      <button  className='buttonCategorias'
      onMouseEnter={() => setMenuVisible(true)}
      onMouseLeave={() => setMenuVisible(false)}
      >CATEGORIAS</button>

      
    < div className='menuAreaOculta'>
        <li>ALPARGATAS</li>
        <li>BONÉS</li>
        <li>PERFUMES</li>
        <li>RELÓGIOS</li>
        <li>CORRENTES</li>
        <li>CARTEIRAS</li>
        <li>CHAPÉUS</li>
        <lo>ENCOMENDA</lo>
        
         </div>
    </div>
  )
}

export default Menu